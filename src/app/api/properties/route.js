export async function GET(){
    return Response.json(properties)
}

const properties = [
    {
      id: "prop1",
      name: "Luxury Downtown Apartment",
      location: "123 Main St, City Center",
      img: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 2500,
      sizeInSqFt: 1200,
      description: "A spacious 2-bedroom apartment in the heart of the city with great amenities.",
      status: "available",
    },
    {
      id: "prop2",
      name: "Cozy Beach House",
      location: "456 Ocean Ave, Seaside",
      img: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 3000,
      sizeInSqFt: 1500,
      description: "A charming beach house with ocean views, perfect for a relaxing getaway.",
      status: "rented",
    },
    {
      id: "prop3",
      name: "Modern Loft",
      location: "789 Industrial Rd, Uptown",
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 2200,
      sizeInSqFt: 1000,
      description: "A sleek, modern loft with an open floor plan and high-end finishes.",
      status: "available",
    },
    {
      id: "prop4",
      name: "Suburban Family Home",
      location: "101 Maple Dr, Suburbia",
      img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 1800,
      sizeInSqFt: 2000,
      description: "A family-friendly home with a spacious yard and a two-car garage.",
      status: "available",
    },
    {
      id: "prop5",
      name: "City Penthouse",
      location: "202 Skyline Blvd, Downtown",
      img: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 5000,
      sizeInSqFt: 2500,
      description: "A luxurious penthouse with panoramic city views and a private rooftop terrace.",
      status: "rented",
    },
    {
      id: "prop6",
      name: "Charming Cottage",
      location: "303 Pine St, Countryside",
      img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 1500,
      sizeInSqFt: 800,
      description: "A cozy 1-bedroom cottage surrounded by nature, perfect for a peaceful retreat.",
      status: "available",
    },
    {
      id: "prop7",
      name: "Spacious Ranch House",
      location: "404 Oak Dr, Suburbia",
      img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 2400,
      sizeInSqFt: 2200,
      description: "A 4-bedroom ranch-style home with a large backyard and space for entertaining.",
      status: "rented",
    },
    {
      id: "prop8",
      name: "Downtown Studio",
      location: "505 Park Ave, City Center",
      img: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 1300,
      sizeInSqFt: 600,
      description: "A modern studio apartment close to shopping, dining, and public transportation.",
      status: "available",
    },
    {
      id: "prop9",
      name: "Luxury Villa",
      location: "606 Mountain Rd, Hillside",
      img: 'https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 7000,
      sizeInSqFt: 3500,
      description: "An upscale villa with breathtaking views, a private pool, and a large outdoor area.",
      status: "rented",
    },
    {
      id: "prop10",
      name: "Urban Loft",
      location: "707 Brick St, Downtown",
      img: 'https://images.pexels.com/photos/8583592/pexels-photo-8583592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rentalPrice: 2800,
      sizeInSqFt: 1800,
      description: "A stylish urban loft with high ceilings, exposed brick walls, and modern fixtures.",
      status: "available",
    },
  ];
  
  
  
//   console.log(properties);
  