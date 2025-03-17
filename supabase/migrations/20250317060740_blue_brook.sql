/*
  # Create boats and bookings tables

  1. New Tables
    - `boats`
      - `id` (bigint, primary key)
      - `name` (text)
      - `description` (text)
      - `image` (text)
      - `capacity` (integer)
      - `price_per_day` (decimal)
      - `is_available` (boolean)
      - `created_at` (timestamptz)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `boat_id` (bigint, references boats)
      - `start_date` (timestamptz)
      - `end_date` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Create boats table
CREATE TABLE boats (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name text NOT NULL,
  description text,
  image text,
  capacity integer NOT NULL,
  price_per_day decimal(10,2) NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  boat_id bigint REFERENCES boats NOT NULL,
  start_date timestamptz NOT NULL DEFAULT now(),
  end_date timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE boats ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Policies for boats table
CREATE POLICY "Anyone can view boats"
  ON boats
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Only admins can insert boats"
  ON boats
  FOR INSERT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@admin.com'
  ));

-- Policies for bookings table
CREATE POLICY "Users can view their own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Insert sample boats
INSERT INTO boats (name, description, image, capacity, price_per_day, is_available) VALUES
('Luxury Yacht', 'Experience ultimate luxury with our premium yacht', 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a', 12, 2999.99, true),
('Speed Boat', 'Perfect for thrill-seekers and water sports enthusiasts', 'https://images.unsplash.com/photo-1544919982-b61976f0ba43', 6, 999.99, true),
('Sailing Boat', 'Classic sailing experience for the whole family', 'https://images.unsplash.com/photo-1534254310421-788ac69d6fd1', 8, 1499.99, true);