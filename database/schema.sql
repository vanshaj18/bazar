-- database/schema.sql

-- Categories Table
CREATE TABLE IF NOT EXISTS Categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

-- Sellers Table (Added location for potential hyperlocal features)
CREATE TABLE IF NOT EXISTS Sellers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    contact_email TEXT,
    contact_phone TEXT,
    address TEXT, -- Simplified location info
    city TEXT,
    postal_code TEXT
    -- For real hyperlocal: latitude REAL, longitude REAL
);

-- Products Table
CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    image_url TEXT,
    category_id INTEGER NOT NULL,
    seller_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES Categories(id),
    FOREIGN KEY (seller_id) REFERENCES Sellers(id)
);

-- Optional: Insert some sample Categories
INSERT INTO Categories (name) VALUES ('Furniture'), ('Bathroom Equipment'), ('Appliances'), ('Electrical Equipment');

-- Optional: Insert a sample Seller
INSERT INTO Sellers (name, contact_email, contact_phone, address, city, postal_code) VALUES
('Local Goods Co.', 'contact@localgoods.com', '123-456-7890', '1 Main St', 'YourTown', '12345');

-- Optional: Insert some sample Products (link to category/seller IDs)
-- Make sure category_id and seller_id correspond to actual entries
-- Example: Assuming Furniture is ID 1, Local Goods Co. is ID 1
INSERT INTO Products (name, description, price, image_url, category_id, seller_id) VALUES
('Wooden Chair', 'A sturdy oak chair, perfect for dining.', 75.99, 'images/chair.jpg', 1, 1),
('Modern Lamp', 'Sleek metal desk lamp with adjustable brightness.', 45.50, 'images/lamp.jpg', 4, 1),
('Bathroom Sink', 'White ceramic pedestal sink.', 120.00, 'images/sink.jpg', 2, 1),
('Toaster Oven', 'Compact toaster oven, great for small kitchens.', 55.00, 'images/toaster.jpg', 3, 1);