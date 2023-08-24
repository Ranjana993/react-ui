import React from 'react'
import "./Home.css"
import Products from '../Product/Products'

const Home = () => {
  return (
    <div className='home'>
      <div className="home__Container">
        <img className='home__Img' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JayeshbhaiJordaar/3000x1200_Hero-Tall_NP._CB634520229_.jpg" alt="" />
        <div className="home__row">
          <Products
            id={1}
            title="OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
            price="34.45"
            image="https://m.media-amazon.com/images/I/71KCwNV6MuL._SX679_.jpg"
            rating={3}
          />
          <Products
            id="2"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback  6 October 2011"
            price="34.45"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            rating={5}
          />

        </div>
        <div className=" Home__Row home__row">
          <Products
            id="3"
            title="Nikon Digital Camera Z 5 Kit with NIKKOR Z 24-200mm f/4-6.3 Lens"
            price="34.45"
            image="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/485ea9aa-b170-4efc-ac40-ab8b0854083c_600x.png?v=1625044988"
            rating={2}
          />
          <Products
            id="4"
            title="MAONO AU-902 USB Condenser Podcast Microphone, with Dual Volume Control"
            price="34.45"
            image="https://m.media-amazon.com/images/I/61KSceiLHwL._SX679_.jpg"
            rating={6}
          />
          <Products
            id="5"
            title="Maono AU-A04H Computer USB Microphone with Studio Headphone Set, Cardioid Podcast Condenser Mic for Gaming, Recording, PS4, Streaming, ASMR, YouTube, Singing, Vocal, PC"
            price="34.45"
            image="https://m.media-amazon.com/images/I/61ZK3Gvc-oL._SX522_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row respomsive__Home__row">
          <Products
            id="6"
            title=" Samsung 59.8 cm (23.5 inch) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
            price="34.45"
            image="https://m.media-amazon.com/images/I/71nplbAMwzL._SX679_.jpg"
            rating={4}
          />
          <Products
            id="5"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback  11"
            price="34.45"
            image="https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Products
            id="5"
            title="HyperX SoloCast  USB Condenser Gaming Microphone, for PC, PS4, and Mac, Tap-to-Mute Sensor, Cardioid Polar Pattern, Gaming, Streaming, Podcasts, Twitch, YouTube, Discord (HMIS1X-XX-BK/G)"
            price="34.45"
            image="https://m.media-amazon.com/images/I/719CKJ0e2IL._SX522_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Products
            id="5"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback  11"
            price="34.45"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Monitors/Fest/June/MMD_Header_1500X300.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  )
}

export default Home