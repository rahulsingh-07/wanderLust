const sampleListing = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
        },
        price: 2500,
        location: "Malibu",
        country: "United States",
        geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Serene Mountain Cabin",
        description: "Experience tranquility in this serene mountain cabin, perfect for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://media.istockphoto.com/id/1374237699/photo/bhopal-city.webp?b=1&s=170667a&w=0&k=20&c=C1heicqgEGaEpJqiRUOA66BF1O0eCRKeJdDmOkO-F98="
        },
        price: 2000,
        location: "Aspen",
        country: "United States",
        geometry: { type: "Point", coordinates: [-106.8205, 39.1911] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Urban Loft Retreat",
        description: "Enjoy city life in this modern urban loft, ideal for a quick city escape.",
        image: {
            filename: "listingimage",
            url: "https://cf.bstatic.com/xdata/images/hotel/max500/549706953.jpg?k=9e67ba197e98284c8ca297dd6555397c5480b1eab3c9cad176e464d4304eaf81&o=&hp=1"
        },
        price: 1800,
        location: "New York City",
        country: "United States",
        geometry: { type: "Point", coordinates: [-74.0060, 40.7128] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Quaint Countryside Bungalow",
        description: "Relax in this quaint countryside bungalow, surrounded by lush greenery.",
        image: {
            filename: "listingimage",
            url: "https://media.architecturaldigest.com/photos/57b201dbcfc37bc171ad80b5/master/w_1600%2Cc_limit/vermont-farm-01.jpg"
        },
        price: 1500,
        location: "Vermont",
        country: "United States",
        geometry: { type: "Point", coordinates: [-72.5778, 44.5588] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Tropical Island Villa",
        description: "Escape to this luxurious tropical island villa with stunning ocean views.",
        image: {
            filename: "listingimage",
            url: "https://www.sakamotoproperties.com/wp-content/uploads/2021/02/maui389817-11.jpg"
        },
        price: 3500,
        location: "Maui",
        country: "United States",
        geometry: { type: "Point", coordinates: [-156.3319, 20.7984] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Cozy Lakeside Cottage",
        description: "Unwind in this cozy lakeside cottage, perfect for fishing and boating.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1676289157074-1afc4b1dfdea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        price: 2200,
        location: "Lake Tahoe",
        country: "United States",
        geometry: { type: "Point", coordinates: [-120.0442, 39.0968] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Rustic Forest Cabin",
        description: "Immerse yourself in nature at this rustic forest cabin, ideal for hikers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D"
        },
        price: 1700,
        location: "Smoky Mountains",
        country: "United States",
        geometry: { type: "Point", coordinates: [-83.5102, 35.6532] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Charming Vineyard Cottage",
        description: "Sip wine and relax at this charming cottage nestled in a vineyard.",
        image: {
            filename: "listingimage",
            url: "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2020/01/APCAL-P0055-Hotel-Exterior.16x9.png"
        },
        price: 2400,
        location: "Napa Valley",
        country: "United States",
        geometry: { type: "Point", coordinates: [-122.2869, 38.2975] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Modern Beach House",
        description: "Enjoy luxury and comfort at this modern beach house with private beach access.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1554797589-7241bb691973?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG9reW98ZW58MHx8MHx8fDA%3D"
        },
        price: 3000,
        location: "Miami",
        country: "United States",
        geometry: { type: "Point", coordinates: [-80.1918, 25.7617] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Historic City Apartment",
        description: "Stay in the heart of the city in this beautifully restored historic apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG9reW98ZW58MHx8MHx8fDA%3D"
        },
        price: 2000,
        location: "Boston",
        country: "United States",
        geometry: { type: "Point", coordinates: [-71.0589, 42.3601] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Secluded Treehouse",
        description: "Escape to this magical treehouse nestled in the woods.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9reW98ZW58MHx8MHx8fDA%3D"
        },
        price: 2100,
        location: "Asheville",
        country: "United States",
        geometry: { type: "Point", coordinates: [-82.5515, 35.5951] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Historic Cottage",
        description: "Stay in this beautifully preserved historic cottage.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Nha2F8ZW58MHx8MHx8fDA%3D"
        },
        price: 1700,
        location: "Savannah",
        country: "United States",
        geometry: { type: "Point", coordinates: [-81.0998, 32.0809] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    },
    {
        title: "Luxury Downtown Loft",
        description: "Experience the city in style from this luxury downtown loft.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3lvdG98ZW58MHx8MHx8fDA%3D"
        },
        price: 4500,
        location: "Denver",
        country: "United States",
        geometry: { type: "Point", coordinates: [-104.9903, 39.7392] },
        owner: '6688ebad76ff13b4a0dc8ff6'
    }
];

//data exports in form of object
module.exports = { data: sampleListing };
