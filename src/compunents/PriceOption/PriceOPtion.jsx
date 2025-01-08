import PriceOptions from "../PriceOptions/PriceOptions";


const PriceOPtion = () => {

   const   priceOption= [
        {
          "id": 1,
          "name": "Smartphone XYZ",
          "category": "Electronics",
          "priceOptions": [
            {
              "id": 101,
              "name": "64GB Storage",
              "price": 499,
              "features": [
                "5.8-inch OLED Display",
                "64GB Internal Storage",
                "12MP Dual Camera",
                "3000mAh Battery"
              ]
            },
            {
              "id": 102,
              "name": "128GB Storage",
              "price": 549,
              "features": [
                "5.8-inch OLED Display",
                "128GB Internal Storage",
                "12MP Dual Camera",
                "3000mAh Battery"
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Wireless Headphones Pro",
          "category": "Accessories",
          "priceOptions": [
            {
              "id": 201,
              "name": "Standard",
              "price": 199,
              "features": [
                "Active Noise Cancellation",
                "30 Hours Battery Life",
                "Bluetooth 5.2",
                "Sweat-Resistant Design"
              ]
            },
            {
              "id": 202,
              "name": "Deluxe",
              "price": 249,
              "features": [
                "Active Noise Cancellation",
                "40 Hours Battery Life",
                "Bluetooth 5.2",
                "Sweat-Resistant Design",
                "Wireless Charging Case"
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "Gaming Laptop Alpha",
          "category": "Computers",
          "priceOptions": [
            {
              "id": 301,
              "name": "Base Model",
              "price": 1099,
              "features": [
                "15.6-inch Full HD Display",
                "Intel Core i5 Processor",
                "8GB RAM",
                "256GB SSD",
                "NVIDIA GTX 1650 Graphics"
              ]
            },
            {
              "id": 302,
              "name": "Pro Model",
              "price": 1399,
              "features": [
                "15.6-inch Full HD Display",
                "Intel Core i7 Processor",
                "16GB RAM",
                "512GB SSD",
                "NVIDIA RTX 3050 Graphics"
              ]
            }
          ]
        },
        {
          "id": 4,
          "name": "Men's Running Shoes",
          "category": "Footwear",
          "priceOptions": [
            {
              "id": 401,
              "name": "Standard",
              "price": 59,
              "features": [
                "Lightweight Design",
                "Breathable Material",
                "Non-Slip Rubber Sole"
              ]
            },
            {
              "id": 402,
              "name": "Premium",
              "price": 79,
              "features": [
                "Lightweight Design",
                "Breathable Material",
                "Non-Slip Rubber Sole",
                "Extra Cushioning for Comfort"
              ]
            }
          ]
        },
        {
          "id": 5,
          "name": "Smartwatch Series 5",
          "category": "Wearables",
          "priceOptions": [
            {
              "id": 501,
              "name": "Aluminum Case",
              "price": 299,
              "features": [
                "GPS Tracking",
                "Heart Rate Monitor",
                "Water-Resistant",
                "Up to 18 Hours Battery Life"
              ]
            },
            {
              "id": 502,
              "name": "Stainless Steel Case",
              "price": 399,
              "features": [
                "GPS Tracking",
                "Heart Rate Monitor",
                "Water-Resistant",
                "Up to 24 Hours Battery Life",
                "Premium Design"
              ]
            }
          ]
        }
      ]
       


    return (
        <div  className="mr-12">
            <h2 className="text-5xl">Best Price in The Town</h2>
            <div    className="grid grid-cols-3 gap-6  " >
            {
                
                priceOption.map((option)=> <PriceOptions key={option.name} option={option}></PriceOptions>)
            }
            </div>
        </div>
    );
};

export default PriceOPtion;