// js/products.js

const products = [
    // Add 60 products here following this structure
    // Ensure you have image files corresponding to 'imageUrl' in the /images/ folder
    // Or use the placeholder: 'images/placeholder.png'
    { id: 1, name: 'Oak Dining Chair', category: 'Furniture', description: 'Classic oak dining chair, sturdy and comfortable. Lacquer finish.', price: 89.99, imageUrl: 'images/placeholder.png', seller: 'Furniture World', sellerContact: 'seller1@email.com' },
    { id: 2, name: 'Modern Floor Lamp', category: 'Electrical Equipment', description: 'Minimalist design floor lamp with LED bulb included. Metal base.', price: 120.50, imageUrl: 'images/placeholder.png', seller: 'Light Up Your Life', sellerContact: 'seller2@email.com' },
    { id: 3, name: 'Ceramic Basin', category: 'Bathroom Equipment', description: 'Wall-mounted white ceramic basin. Taps not included.', price: 150.00, imageUrl: 'images/placeholder.png', seller: 'Bath & Beyond', sellerContact: 'seller3@email.com' },
    { id: 4, name: 'Toaster Pro', category: 'Appliances', description: '4-slice toaster with bagel function and crumb tray.', price: 45.95, imageUrl: 'images/placeholder.png', seller: 'Kitchen Gadgets Inc.', sellerContact: 'seller4@email.com' },
    { id: 5, name: 'Bookshelf Unit', category: 'Furniture', description: '5-tier bookshelf, dark brown finish. Assembly required.', price: 110.00, imageUrl: 'images/placeholder.png', seller: 'Furniture World', sellerContact: 'seller1@email.com' },
    { id: 6, name: 'Shower Head Set', category: 'Bathroom Equipment', description: 'Chrome finish shower head with multiple spray settings.', price: 65.00, imageUrl: 'images/placeholder.png', seller: 'Bath & Beyond', sellerContact: 'seller3@email.com' },
    { id: 7, name: 'Extension Cord', category: 'Electrical Equipment', description: '5-meter heavy-duty extension cord with surge protection.', price: 25.00, imageUrl: 'images/placeholder.png', seller: 'Light Up Your Life', sellerContact: 'seller2@email.com' },
    { id: 8, name: 'Blender Max', category: 'Appliances', description: 'High-speed blender for smoothies and soups. 1.5L capacity.', price: 79.99, imageUrl: 'images/placeholder.png', seller: 'Kitchen Gadgets Inc.', sellerContact: 'seller4@email.com' },
    { id: 9, name: 'Coffee Table', category: 'Furniture', description: 'Round coffee table with glass top and wooden legs.', price: 135.00, imageUrl: 'images/placeholder.png', seller: 'Furniture World', sellerContact: 'seller1@email.com'},
    { id: 10, name: 'Ceiling Fan', category: 'Electrical Equipment', description: '5-blade ceiling fan with remote control. White finish.', price: 180.00, imageUrl: 'images/placeholder.png', seller: 'Light Up Your Life', sellerContact: 'seller2@email.com'},
    { id: 11, name: 'Toilet Roll Holder', category: 'Bathroom Equipment', description: 'Stainless steel toilet roll holder. Wall-mounted.', price: 19.99, imageUrl: 'images/placeholder.png', seller: 'Bath & Beyond', sellerContact: 'seller3@email.com'},
    { id: 12, name: 'Microwave Oven', category: 'Appliances', description: 'Compact microwave oven, 800W power.', price: 95.00, imageUrl: 'images/placeholder.png', seller: 'Kitchen Gadgets Inc.', sellerContact: 'seller4@email.com'},
    { id: 13, name: 'Office Desk', category: 'Furniture', description: 'Simple office desk with two drawers. Light wood effect.', price: 160.00, imageUrl: 'images/placeholder.png', seller: 'Furniture World', sellerContact: 'seller1@email.com'},
    { id: 14, name: 'Wall Sconce', category: 'Electrical Equipment', description: 'Antique brass finish wall sconce. Bulb not included.', price: 55.00, imageUrl: 'images/placeholder.png', seller: 'Light Up Your Life', sellerContact: 'seller2@email.com'},
    { id: 15, name: 'Towel Rail', category: 'Bathroom Equipment', description: 'Heated towel rail, chrome finish. Electric.', price: 115.00, imageUrl: 'images/placeholder.png', seller: 'Bath & Beyond', sellerContact: 'seller3@email.com'},
    { id: 16, name: 'Electric Kettle', category: 'Appliances', description: 'Fast-boil electric kettle, 1.7L capacity. Stainless steel.', price: 35.50, imageUrl: 'images/placeholder.png', seller: 'Kitchen Gadgets Inc.', sellerContact: 'seller4@email.com'},
    { id: 17, name: 'Smartphone', category: 'Electrical Equipment', description: 'Latest model with 6.5-inch OLED display and 128GB storage.', price: 899.99, imageUrl: 'images/placeholder.png', seller: 'Tech World', sellerContact: 'seller1@email.com' },
    { id: 18, name: 'Bluetooth Headphones', category: 'Electrical Equipment', description: 'Noise-cancelling wireless headphones with 30-hour battery life.', price: 129.99, imageUrl: 'images/placeholder.png', seller: 'Audio Gear', sellerContact: 'seller2@email.com' },
    { id: 19, name: 'Refrigerator', category: 'Appliances', description: 'Double-door fridge with energy-saving technology and 450L capacity.', price: 799.00, imageUrl: 'images/placeholder.png', seller: 'Home Essentials', sellerContact: 'seller3@email.com' },
    { id: 20, name: 'Air Purifier', category: 'Appliances', description: 'HEPA filter air purifier with 3-stage filtration and smart sensors.', price: 149.99, imageUrl: 'images/placeholder.png', seller: 'PureAir Systems', sellerContact: 'seller4@email.com' },
    { id: 21, name: 'Electric Blender', category: 'Appliances', description: 'High-speed electric blender with 6-speed settings and 1.5L jug.', price: 49.99, imageUrl: 'images/placeholder.png', seller: 'Blender Pro', sellerContact: 'seller5@email.com' },
    { id: 22, name: 'Smartwatch', category: 'Electrical Equipment', description: 'Waterproof smartwatch with heart rate monitoring and GPS tracking.', price: 199.99, imageUrl: 'images/placeholder.png', seller: 'Tech Gear', sellerContact: 'seller6@email.com' },
    { id: 23, name: 'Electric Toothbrush', category: 'Bathroom Equipment', description: 'Sonic electric toothbrush with multiple cleaning modes and long battery life.', price: 59.99, imageUrl: 'images/placeholder.png', seller: 'DentalCare Co.', sellerContact: 'seller7@email.com' },
    { id: 24, name: 'Cordless Vacuum Cleaner', category: 'Appliances', description: 'Lightweight cordless vacuum cleaner with powerful suction and long battery life.', price: 179.99, imageUrl: 'images/placeholder.png', seller: 'CleanTech', sellerContact: 'seller8@email.com' },
    { id: 25, name: 'Bathroom Mirror', category: 'Bathroom Equipment', description: 'Frameless LED bathroom mirror with adjustable brightness and anti-fog feature.', price: 89.99, imageUrl: 'images/placeholder.png', seller: 'MirrorWorks', sellerContact: 'seller9@email.com' },
    { id: 26, name: 'Sofa Set', category: 'Furniture', description: '3-piece sofa set with plush cushions and contemporary design.', price: 499.00, imageUrl: 'images/placeholder.png', seller: 'Furniture Hub', sellerContact: 'seller10@email.com' },
    { id: 27, name: 'Washing Machine', category: 'Appliances', description: 'Front-load washing machine with smart wash settings and energy efficiency.', price: 349.99, imageUrl: 'images/placeholder.png', seller: 'Home Appliances Co.', sellerContact: 'seller11@email.com' },
    { id: 28, name: 'Space Heater', category: 'Appliances', description: 'Portable space heater with adjustable thermostat and safety features.', price: 79.99, imageUrl: 'images/placeholder.png', seller: 'HeatWave', sellerContact: 'seller12@email.com' },
    { id: 29, name: 'Toilet Paper Dispenser', category: 'Bathroom Equipment', description: 'Stainless steel toilet paper dispenser with sleek design and easy refill system.', price: 24.99, imageUrl: 'images/placeholder.png', seller: 'Bathroom Essentials', sellerContact: 'seller13@email.com' },
    { id: 30, name: 'Dining Table Set', category: 'Furniture', description: '5-piece dining table set with wooden top and elegant design.', price: 299.99, imageUrl: 'images/placeholder.png', seller: 'Dining Furniture Co.', sellerContact: 'seller14@email.com' },
    { id: 31, name: 'Ceiling Fan', category: 'Electrical Equipment', description: 'Energy-efficient ceiling fan with remote control and 3-speed settings.', price: 89.99, imageUrl: 'images/placeholder.png', seller: 'Home Breeze', sellerContact: 'seller15@email.com' },
    { id: 32, name: 'Shower Head', category: 'Bathroom Equipment', description: 'Handheld shower head with adjustable spray settings and water-saving features.', price: 34.99, imageUrl: 'images/placeholder.png', seller: 'Shower Solutions', sellerContact: 'seller16@email.com' },
    { id: 33, name: 'Coffee Maker', category: 'Appliances', description: 'Automatic coffee maker with programmable timer and 12-cup capacity.', price: 69.99, imageUrl: 'images/placeholder.png', seller: 'BrewMaster', sellerContact: 'seller17@email.com' },
    { id: 34, name: 'Leather Recliner', category: 'Furniture', description: 'Luxurious leather recliner with adjustable headrest and footrest.', price: 599.99, imageUrl: 'images/placeholder.png', seller: 'Recline Comforts', sellerContact: 'seller18@email.com' },
    { id: 35, name: 'Electric Oven', category: 'Appliances', description: 'Compact electric oven with 5 cooking modes and easy-to-clean design.', price: 129.99, imageUrl: 'images/placeholder.png', seller: 'Kitchen Masters', sellerContact: 'seller19@email.com' },
    { id: 36, name: 'Electric Shower', category: 'Bathroom Equipment', description: 'Instant electric shower with temperature control and safe installation.', price: 199.99, imageUrl: 'images/placeholder.png', seller: 'Shower Experts', sellerContact: 'seller20@email.com' },
    { id: 37, name: 'Floor Lamp', category: 'Furniture', description: 'Elegant floor lamp with adjustable height and dimming feature.', price: 89.99, imageUrl: 'images/placeholder.png', seller: 'Lighting Solutions', sellerContact: 'seller21@email.com' },
    { id: 38, name: 'Dishwasher', category: 'Appliances', description: 'Dishwasher with multiple wash cycles, energy-efficient, and large capacity.', price: 499.00, imageUrl: 'images/placeholder.png', seller: 'CleanUp Appliances', sellerContact: 'seller22@email.com' },
    { id: 39, name: 'Electric Grill', category: 'Appliances', description: 'Non-stick electric grill with adjustable temperature and removable plates.', price: 99.99, imageUrl: 'images/placeholder.png', seller: 'GrillPro', sellerContact: 'seller23@email.com' },
    { id: 40, name: 'LED Desk Lamp', category: 'Furniture', description: 'Adjustable LED desk lamp with touch control and multiple brightness levels.', price: 39.99, imageUrl: 'images/placeholder.png', seller: 'BrightLights', sellerContact: 'seller24@email.com' },
    { id: 41, name: 'Wall-Mounted Heater', category: 'Appliances', description: 'Wall-mounted electric heater with temperature control and timer feature.', price: 159.99, imageUrl: 'images/placeholder.png', seller: 'HeatWave Inc.', sellerContact: 'seller25@email.com' },
    { id: 42, name: 'Bathroom Sink', category: 'Bathroom Equipment', description: 'Modern design bathroom sink with ceramic finish and easy installation.', price: 119.99, imageUrl: 'images/placeholder.png', seller: 'Bathroom Innovators', sellerContact: 'seller26@email.com' },
    { id: 43, name: 'Bookshelf', category: 'Furniture', description: 'Wooden bookshelf with 5 shelves and contemporary design.', price: 89.99, imageUrl: 'images/placeholder.png', seller: 'FurniCo', sellerContact: 'seller27@email.com' },
    { id: 44, name: 'Portable Air Conditioner', category: 'Appliances', description: 'Energy-efficient portable air conditioner with remote control and cooling modes.', price: 299.99, imageUrl: 'images/placeholder.png', seller: 'CoolAir', sellerContact: 'seller28@email.com' },
    { id: 45, name: 'Towel Warmer', category: 'Bathroom Equipment', description: 'Compact towel warmer with adjustable heat settings and safe design.', price: 79.99, imageUrl: 'images/placeholder.png', seller: 'WarmTowels', sellerContact: 'seller29@email.com' },
    { id: 46, name: 'Side Table', category: 'Furniture', description: 'Modern side table with glass top and sleek metal legs.', price: 69.99, imageUrl: 'images/placeholder.png', seller: 'SideDecor', sellerContact: 'seller30@email.com' },
    { id: 47, name: 'Freezer', category: 'Appliances', description: 'Upright freezer with energy-saving feature and 300L capacity.', price: 349.00, imageUrl: 'images/placeholder.png', seller: 'ColdStore', sellerContact: 'seller31@email.com' },
    { id: 48, name: 'Wall-Mounted Shelf', category: 'Furniture', description: 'Floating wall shelf with wooden design and hidden mounting brackets.', price: 59.99, imageUrl: 'images/placeholder.png', seller: 'Shelves Inc.', sellerContact: 'seller32@email.com' },
    { id: 49, name: 'Electric Heater', category: 'Appliances', description: 'Compact electric heater with ceramic technology and quick heat-up feature.', price: 79.99, imageUrl: 'images/placeholder.png', seller: 'WarmUp', sellerContact: 'seller33@email.com' },
    { id: 50, name: 'Shower Stall', category: 'Bathroom Equipment', description: 'Space-saving shower stall with tempered glass doors and built-in shelves.', price: 699.99, imageUrl: 'images/placeholder.png', seller: 'BathSolutions', sellerContact: 'seller34@email.com' },
    { id: 51, name: 'Electric Rice Cooker', category: 'Appliances', description: 'Electric rice cooker with 1.8L capacity and multiple cooking settings.', price: 49.99, imageUrl: 'images/placeholder.png', seller: 'KitchenPro', sellerContact: 'seller35@email.com' },
    { id: 52, name: 'Shower Curtain', category: 'Bathroom Equipment', description: 'Waterproof shower curtain with anti-mold finish and decorative design.', price: 19.99, imageUrl: 'images/placeholder.png', seller: 'ShowerStyle', sellerContact: 'seller36@email.com' },
    { id: 53, name: 'Sectional Sofa', category: 'Furniture', description: 'Luxurious sectional sofa with plush cushions and modern design.', price: 899.99, imageUrl: 'images/placeholder.png', seller: 'Comfy Living', sellerContact: 'seller37@email.com' },
    { id: 54, name: 'Hair Dryer', category: 'Electrical Equipment', description: 'Compact hair dryer with multiple heat settings and folding handle.', price: 29.99, imageUrl: 'images/placeholder.png', seller: 'Hair Care Co.', sellerContact: 'seller38@email.com' },
    { id: 55, name: 'Dining Chair Set', category: 'Furniture', description: 'Set of 4 dining chairs with wooden frame and cushioned seats.', price: 159.99, imageUrl: 'images/placeholder.png', seller: 'Dining Comforts', sellerContact: 'seller39@email.com' },
    { id: 56, name: 'Wrought Iron Bed Frame', category: 'Furniture', description: 'Sturdy wrought iron bed frame with vintage design and king-size option.', price: 299.99, imageUrl: 'images/placeholder.png', seller: 'IronWorks Furniture', sellerContact: 'seller40@email.com' },
    { id: 57, name: 'Bedside Table', category: 'Furniture', description: 'Small bedside table with one drawer. Brown finish.', price: 65.00, imageUrl: 'images/placeholder.png', seller: 'Furniture World', sellerContact: 'seller1@email.com'},
    { id: 58, name: 'Power Strip', category: 'Electrical Equipment', description: '6-outlet power strip with USB charging ports.', price: 30.00, imageUrl: 'images/placeholder.png', seller: 'Light Up Your Life', sellerContact: 'seller2@email.com'},
    { id: 59, name: 'Mirror Cabinet', category: 'Bathroom Equipment', description: 'Bathroom mirror cabinet with internal shelves.', price: 90.00, imageUrl: 'images/placeholder.png', seller: 'Bath & Beyond', sellerContact: 'seller3@email.com'},
    { id: 60, name: 'Hand Mixer', category: 'Appliances', description: 'Electric hand mixer with multiple speed settings.', price: 28.00, imageUrl: 'images/placeholder.png', seller: 'Kitchen Gadgets Inc.', sellerContact: 'seller4@email.com' }

];

// Function to get a random subset of products (or all for now)
function getRandomProducts(count) {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to find a product by ID (simulates DB lookup)
function findProductById(id) {
    // In a real app, you'd fetch this from the backend API
    return products.find(p => p.id === parseInt(id));
}
// Function to get products by category
function getProductsByCategory(category) {
    if (!category || category.toLowerCase() === 'all') {
        return products; // Return all if no category or 'all'
    }
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}