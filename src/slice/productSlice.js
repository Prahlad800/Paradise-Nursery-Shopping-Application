import { createSlice } from '@reduxjs/toolkit'
const initialState =[
    {
      "id": 1,
      "name": "Lavender",
      "category": "Aromatic",
      "price": 249,
      "discount": 15,
      "finalPrice": 212,
      "quantity": 0,
      "image": "https://cdn.pixabay.com/photo/2021/07/09/06/57/lavender-6398425_1280.jpg",
      "description": "Calming aromatic plant used in relaxation and stress relief."
    },
    {
      "id": 2,
      "name": "Rosemary",
      "category": "Aromatic",
      "price": 199,
      "discount": 10,
      "finalPrice": 179,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
      "description": "Fragrant herb commonly used in cooking and aromatherapy."
    },
    {
      "id": 3,
      "name": "Jasmine",
      "category": "Aromatic",
      "price": 179,
      "discount": 18,
      "finalPrice": 147,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "description": "Sweet smelling flowering plant."
    },
    {
      "id": 4,
      "name": "Chamomile",
      "category": "Aromatic",
      "price": 229,
      "discount": 12,
      "finalPrice": 202,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1471943038886-87c772c31367",
      "description": "Used in herbal teas and calming remedies."
    },
    {
      "id": 5,
      "name": "Snake Plant",
      "category": "Air Purifying",
      "price": 299,
      "discount": 20,
      "finalPrice": 239,
      "quantity": 0,
      "image": "https://media.istockphoto.com/id/1268045137/photo/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment.jpg?s=1024x1024&w=is&k=20&c=QEU95vPncHAk_iSdIR5ZrswomfmtGUjdam0dNjd7O1Q=",
      "description": "Improves indoor air quality."
    },
    {
      "id": 6,
      "name": "Spider Plant",
      "category": "Air Purifying",
      "price": 219,
      "discount": 8,
      "finalPrice": 201,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Removes toxins from indoor air."
    },
    {
      "id": 7,
      "name": "Peace Lily",
      "category": "Air Purifying",
      "price": 349,
      "discount": 25,
      "finalPrice": 262,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c",
      "description": "Elegant plant that filters pollutants."
    },
    {
      "id": 8,
      "name": "Areca Palm",
      "category": "Air Purifying",
      "price": 399,
      "discount": 14,
      "finalPrice": 343,
      "quantity": 0,
      "image": "https://media.istockphoto.com/id/1308620894/photo/beautiful-indoor-palm-plants-on-floor-in-room-space-for-text-house-decoration.jpg?s=1024x1024&w=is&k=20&c=ZD-7n_Buv8X2ZrEwSTgAHx_d7VUP1-c-T2DR0Y-Tv_k=",
      "description": "Natural humidifier and air purifier."
    },
    {
      "id": 9,
      "name": "Aloe Vera",
      "category": "Medicinal",
      "price": 199,
      "discount": 5,
      "finalPrice": 189,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1570295835271-04c05b4ed943?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Known for skincare and healing benefits."
    },
    {
      "id": 10,
      "name": "Tulsi",
      "category": "Medicinal",
      "price": 149,
      "discount": 30,
      "finalPrice": 104,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
      "description": "Boosts immunity and improves health."
    },
    {
      "id": 11,
      "name": "Mint",
      "category": "Medicinal",
      "price": 99,
      "discount": 10,
      "finalPrice": 89,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
      "description": "Refreshing herb for drinks and digestion."
    },
    {
      "id": 12,
      "name": "Basil",
      "category": "Medicinal",
      "price": 129,
      "discount": 22,
      "finalPrice": 101,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
      "description": "Used in cooking and herbal medicine."
    },
    {
      "id": 13,
      "name": "Cactus",
      "category": "Succulent",
      "price": 179,
      "discount": 16,
      "finalPrice": 150,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "description": "Low maintenance desert plant."
    },
    {
      "id": 14,
      "name": "Jade Plant",
      "category": "Succulent",
      "price": 249,
      "discount": 12,
      "finalPrice": 219,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      "description": "Symbol of prosperity and good luck."
    },
    {
      "id": 15,
      "name": "ZZ Plant",
      "category": "Air Purifying",
      "price": 329,
      "discount": 9,
      "finalPrice": 299,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1714507770401-cecd5ff44d1a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "description": "Thrives in low light conditions."
    },
    {
      "id": 16,
      "name": "Money Plant",
      "category": "Air Purifying",
      "price": 199,
      "discount": 18,
      "finalPrice": 163,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Popular indoor decorative plant."
    },
    {
      "id": 17,
      "name": "Thyme",
      "category": "Medicinal",
      "price": 159,
      "discount": 11,
      "finalPrice": 142,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1471943038886-87c772c31367",
      "description": "Herb used in cooking and remedies."
    },
    {
      "id": 18,
      "name": "Orchid",
      "category": "Flowering",
      "price": 499,
      "discount": 35,
      "finalPrice": 324,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
      "description": "Beautiful decorative flowering plant."
    },
    {
      "id": 19,
      "name": "Hibiscus",
      "category": "Flowering",
      "price": 299,
      "discount": 7,
      "finalPrice": 278,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "description": "Vibrant flowering garden plant."
    },
    {
      "id": 20,
      "name": "Fern",
      "category": "Air Purifying",
      "price": 219,
      "discount": 13,
      "finalPrice": 190,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587502537104-2a7f6b6e6a73",
      "description": "Classic indoor greenery plant."
    },
    {
      "id": 21,
      "name": "Geranium",
      "category": "Flowering",
      "price": 259,
      "discount": 14,
      "finalPrice": 223,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1524594227085-7c6c0b9a7f1f",
      "description": "Bright flowering plant ideal for balconies."
    },
    {
      "id": 22,
      "name": "Petunia",
      "category": "Flowering",
      "price": 189,
      "discount": 9,
      "finalPrice": 172,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "description": "Colorful seasonal flowering plant."
    },
    {
      "id": 23,
      "name": "Anthurium",
      "category": "Flowering",
      "price": 549,
      "discount": 20,
      "finalPrice": 439,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1597848212624-7a4a3b3f0c3d",
      "description": "Exotic indoor flowering plant."
    },
    {
      "id": 24,
      "name": "Bougainvillea",
      "category": "Flowering",
      "price": 329,
      "discount": 11,
      "finalPrice": 293,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "description": "Vibrant outdoor climbing plant."
    },
    {
      "id": 25,
      "name": "Dracaena",
      "category": "Air Purifying",
      "price": 379,
      "discount": 17,
      "finalPrice": 315,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5b8b",
      "description": "Improves indoor air quality."
    },
    {
      "id": 26,
      "name": "Rubber Plant",
      "category": "Air Purifying",
      "price": 449,
      "discount": 19,
      "finalPrice": 364,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Stylish indoor plant with glossy leaves."
    },
    {
      "id": 27,
      "name": "English Ivy",
      "category": "Air Purifying",
      "price": 299,
      "discount": 6,
      "finalPrice": 281,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587502537104-2a7f6b6e6a73",
      "description": "Classic trailing plant."
    },
    {
      "id": 28,
      "name": "Citronella",
      "category": "Medicinal",
      "price": 199,
      "discount": 13,
      "finalPrice": 173,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587049352851-8d4e89133924",
      "description": "Natural mosquito repellent plant."
    },
    {
      "id": 29,
      "name": "Lemongrass",
      "category": "Medicinal",
      "price": 149,
      "discount": 15,
      "finalPrice": 127,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1471943038886-87c772c31367",
      "description": "Used in herbal teas and cooking."
    },
    {
      "id": 30,
      "name": "Ashwagandha",
      "category": "Medicinal",
      "price": 299,
      "discount": 21,
      "finalPrice": 236,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
      "description": "Popular Ayurvedic medicinal plant."
    },
    {
      "id": 31,
      "name": "Echeveria",
      "category": "Succulent",
      "price": 219,
      "discount": 10,
      "finalPrice": 197,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      "description": "Compact decorative succulent."
    },
    {
      "id": 32,
      "name": "Agave",
      "category": "Succulent",
      "price": 349,
      "discount": 12,
      "finalPrice": 307,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "description": "Drought resistant succulent."
    },
    {
      "id": 33,
      "name": "Sedum",
      "category": "Succulent",
      "price": 189,
      "discount": 8,
      "finalPrice": 174,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      "description": "Low maintenance indoor plant."
    },
    {
      "id": 34,
      "name": "Calathea",
      "category": "Indoor Decorative",
      "price": 459,
      "discount": 18,
      "finalPrice": 376,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5b8b",
      "description": "Beautiful patterned leaves."
    },
    {
      "id": 35,
      "name": "Monstera",
      "category": "Indoor Decorative",
      "price": 599,
      "discount": 22,
      "finalPrice": 467,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Trendy large leaf plant."
    },
    {
      "id": 36,
      "name": "Fiddle Leaf Fig",
      "category": "Indoor Decorative",
      "price": 799,
      "discount": 25,
      "finalPrice": 599,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587502537104-2a7f6b6e6a73",
      "description": "Premium indoor statement plant."
    },
    {
      "id": 37,
      "name": "Coleus",
      "category": "Outdoor",
      "price": 169,
      "discount": 9,
      "finalPrice": 154,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1524594227085-7c6c0b9a7f1f",
      "description": "Colorful foliage plant."
    },
    {
      "id": 38,
      "name": "Croton",
      "category": "Outdoor",
      "price": 279,
      "discount": 14,
      "finalPrice": 240,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "description": "Bright multicolored leaves."
    },
    {
      "id": 39,
      "name": "Ixora",
      "category": "Outdoor",
      "price": 259,
      "discount": 7,
      "finalPrice": 241,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "description": "Cluster flowering garden plant."
    },
    {
      "id": 40,
      "name": "Neem Plant",
      "category": "Medicinal",
      "price": 349,
      "discount": 20,
      "finalPrice": 279,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
      "description": "Traditional medicinal tree plant."
    },
    {
      "id": 41,
      "name": "Peperomia",
      "category": "Indoor Decorative",
      "price": 239,
      "discount": 12,
      "finalPrice": 210,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      "description": "Compact ornamental plant."
    },
    {
      "id": 42,
      "name": "Syngonium",
      "category": "Indoor Decorative",
      "price": 199,
      "discount": 10,
      "finalPrice": 179,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5b8b",
      "description": "Arrow shaped leaf plant."
    },
    {
      "id": 43,
      "name": "Philodendron",
      "category": "Indoor Decorative",
      "price": 329,
      "discount": 16,
      "finalPrice": 276,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Easy growing indoor plant."
    },
    {
      "id": 44,
      "name": "Gardenia",
      "category": "Flowering",
      "price": 399,
      "discount": 18,
      "finalPrice": 327,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1524594227085-7c6c0b9a7f1f",
      "description": "Fragrant white flowering plant."
    },
    {
      "id": 45,
      "name": "Daisy",
      "category": "Flowering",
      "price": 189,
      "discount": 5,
      "finalPrice": 180,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1599423300746-b62533397364",
      "description": "Simple and cheerful flower plant."
    },
    {
      "id": 46,
      "name": "Marigold",
      "category": "Flowering",
      "price": 149,
      "discount": 10,
      "finalPrice": 134,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      "description": "Popular festive flowering plant."
    },
    {
      "id": 47,
      "name": "Lucky Bamboo",
      "category": "Indoor Decorative",
      "price": 299,
      "discount": 15,
      "finalPrice": 254,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5b8b",
      "description": "Symbol of good fortune."
    },
    {
      "id": 48,
      "name": "Pothos",
      "category": "Air Purifying",
      "price": 219,
      "discount": 12,
      "finalPrice": 193,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
      "description": "Hardy trailing indoor plant."
    },
    {
      "id": 49,
      "name": "Boston Fern",
      "category": "Air Purifying",
      "price": 269,
      "discount": 14,
      "finalPrice": 231,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1587502537104-2a7f6b6e6a73",
      "description": "Lush green indoor fern."
    },
    {
      "id": 50,
      "name": "Chrysanthemum",
      "category": "Flowering",
      "price": 349,
      "discount": 17,
      "finalPrice": 289,
      "quantity": 0,
      "image": "https://images.unsplash.com/photo-1524594227085-7c6c0b9a7f1f",
      "description": "Seasonal decorative flowering plant."
    },
  ]

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    quantityIncre: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload
      );
      if (product) {
        product.quantity += 1;
      }
    },

    quantityDecre: (state, action) => {
      const product = state.find(
        (item) => item.id === action.payload
      );
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  }


})

export const { quantityDecre, quantityIncre } = productSlice.actions;
export default productSlice.reducer;