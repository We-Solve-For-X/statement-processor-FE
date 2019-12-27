import PageLayout from '../components/PageLayout';
import { useRouter } from 'next/router';

export default function About() {

    const router = useRouter();


    return (
        <PageLayout>
            <p>This is the about page.</p>
            <p>This website was built as an attempt to upskill in React, NextJS + Kotlin.</p>
        </PageLayout>
    );
  }


