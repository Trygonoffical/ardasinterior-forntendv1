import Centralbar from "./Centralbar"
import Menubar from "./Menubar"
import Topbar from "./Topbar";
import Header from "./Header";
import Test from "./Test";
const Navbar = () => {
    const navigation = [
        { name: 'Furnituree', href: '#', current: true , submenu : [
          { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
          { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
          { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
          { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
          { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
        ] },
        { name: 'Home Decor', href: '#', current: false },
        { name: 'Mattresses', href: '#', current: false },
        { name: 'Home Decor', href: '#', current: false },
        { name: 'Furnishings', href: '#', current: false },
        { name: 'Lamps & Lighting', href: '#', current: false },
        { name: 'Kitchen & Dining', href: '#', current: false },
        { name: 'Modular', href: '#', current: false },
        
      ];

      const navigation2 = {
        categories: [
          {
            id: 'Furniture',
            name: 'Furniture',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
              },
              {
                name: 'Basic Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Dresses', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Denim', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Significant Other', href: '#' },
                ],
              },
            ],
          },
          {
            id: 'Sofas & Seating',
            name: 'Sofas & Seating',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                ],
              },
            ],
          },
          {
            id: 'Mattresses',
            name: 'Mattresses',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                ],
              },
            ],
          },
          {
            id: 'Home Decor',
            name: 'Home Decor',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                ],
              },
            ],
          },


          {
            id: 'Furnishings',
            name: 'Furnishings',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                ],
              },
            ],
          },


          {
            id: 'Deal Zone',
            name: 'Deal Zone',
            featured: [
              {
                name: 'New Arrivals',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
                imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
              },
              {
                name: 'Artwork Tees',
                href: '#',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
                imageAlt:
                  'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
              },
            ],
            sections: [
              {
                id: 'clothing',
                name: 'Clothing',
                items: [
                  { name: 'Tops', href: '#' },
                  { name: 'Pants', href: '#' },
                  { name: 'Sweaters', href: '#' },
                  { name: 'T-Shirts', href: '#' },
                  { name: 'Jackets', href: '#' },
                  { name: 'Activewear', href: '#' },
                  { name: 'Browse All', href: '#' },
                ],
              },
              {
                id: 'accessories',
                name: 'Accessories',
                items: [
                  { name: 'Watches', href: '#' },
                  { name: 'Wallets', href: '#' },
                  { name: 'Bags', href: '#' },
                  { name: 'Sunglasses', href: '#' },
                  { name: 'Hats', href: '#' },
                  { name: 'Belts', href: '#' },
                ],
              },
              {
                id: 'brands',
                name: 'Brands',
                items: [
                  { name: 'Re-Arranged', href: '#' },
                  { name: 'Counterfeit', href: '#' },
                  { name: 'Full Nelson', href: '#' },
                  { name: 'My Way', href: '#' },
                ],
              },
            ],
          },
        ],
        // pages: [
        //   { name: 'Company', href: '#' },
        //   { name: 'Stores', href: '#' },
        // ],
      }
  return (
    <>
      {/* <Topbar />  */}
      {/* <Header navigation={navigation} /> 
      <Centralbar navigation={navigation} /> */}
      <Test />
      <Menubar navigation={navigation2} />
    {/* <Test /> */}
  
  </>
    )
}



export default Navbar