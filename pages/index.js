import Head from 'next/head';
import Bridge from '../components/bridge';
import Navbar from '../components/navbar';
import Review from '../components/reviews';
import Footer from '../components/footer';
import Pass from '../components/pass';

export default function Home() {
  return(
    <div>
      <Head>
        <title>5S Cleaners</title>
      </Head>
      <Navbar>
      </Navbar>
      <Bridge>
      </Bridge>
      <Pass></Pass>
      <Review>
      </Review>
      <Footer>
      </Footer>

    </div>
    
)
}
