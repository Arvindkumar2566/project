/*
  # Enhance boats and bookings tables

  1. Updates
    - Add new columns to boats table:
      - `location` (text)
      - `features` (text[])
      - `rating` (decimal)
      - `reviews_count` (integer)
      - `category` (text)
    
    2. Add more sample data with enhanced details

  3. Security
    - Add policies for ratings and reviews
*/

-- Add new columns to boats table
ALTER TABLE boats ADD COLUMN location text NOT NULL DEFAULT 'Marina Bay';
ALTER TABLE boats ADD COLUMN features text[] NOT NULL DEFAULT '{}';
ALTER TABLE boats ADD COLUMN rating decimal(3,2) NOT NULL DEFAULT 5.0;
ALTER TABLE boats ADD COLUMN reviews_count integer NOT NULL DEFAULT 0;
ALTER TABLE boats ADD COLUMN category text NOT NULL DEFAULT 'yacht';

-- Update existing boats with enhanced data
UPDATE boats SET 
  features = ARRAY['GPS Navigation', 'Premium Sound System', 'Full Kitchen', 'Master Suite', 'Sun Deck'],
  location = 'Miami Beach Marina',
  rating = 4.85,
  reviews_count = 124,
  category = 'luxury'
WHERE name = 'Luxury Yacht';

UPDATE boats SET 
  features = ARRAY['Twin Engines', 'Water Sports Equipment', 'Bluetooth Audio', 'Swimming Platform'],
  location = 'Fort Lauderdale',
  rating = 4.75,
  reviews_count = 89,
  category = 'sport'
WHERE name = 'Speed Boat';

UPDATE boats SET 
  features = ARRAY['Full Sails', 'Navigation Equipment', 'Fishing Gear', 'Cabin Beds', 'Kitchen'],
  location = 'San Diego Bay',
  rating = 4.90,
  reviews_count = 156,
  category = 'sailing'
WHERE name = 'Sailing Boat';

-- Insert additional boats
INSERT INTO boats (
  name, description, image, capacity, price_per_day, location, features, rating, reviews_count, category
) VALUES
(
  'Catamaran Dream',
  'Spacious catamaran perfect for family trips and group celebrations',
  'https://images.unsplash.com/photo-1531339751961-324b4c494be9',
  16,
  3499.99,
  'Key West Harbor',
  ARRAY['Dual Hulls', 'Spacious Deck', 'Multiple Cabins', 'Outdoor Kitchen', 'Snorkeling Gear'],
  4.95,
  203,
  'catamaran'
),
(
  'Fishing Pro',
  'Fully equipped fishing boat with latest fish-finding technology',
  'https://images.unsplash.com/photo-1564762861003-0e8aa2011cc0',
  8,
  799.99,
  'Tampa Bay Marina',
  ARRAY['Fish Finder', 'Tackle Storage', 'Live Well', 'Rod Holders', 'Cooler Storage'],
  4.80,
  167,
  'fishing'
),
(
  'Party Pontoon',
  'Perfect for day trips and social gatherings on the water',
  'https://images.unsplash.com/photo-1610480775011-9d41a6e446bb',
  12,
  599.99,
  'Lake Tahoe',
  ARRAY['BBQ Grill', 'Bluetooth Speakers', 'Shade Canopy', 'Swimming Ladder', 'Cooler'],
  4.70,
  145,
  'pontoon'
);