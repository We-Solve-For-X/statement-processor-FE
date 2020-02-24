import PageLayout from '../components/PageLayout';
import { useRouter } from 'next/router';

export default function About() {

    const router = useRouter();


    return (
        <PageLayout>
            <div style={{padding: 15}}>
                <p>This is the about and instructions page.</p>
                <p>Add basic instructions on how the statement processor works, here</p>
            </div>
        </PageLayout>
    );
  }


