import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

export default function About() {

    const router = useRouter();
    console.log('q', router)

    return (
        <Layout>
            <p>This is the about page.</p>
            <p>This website was built as an attempt to upskill in React, NextJS + Kotlin.</p>
        </Layout>
    );
  }


