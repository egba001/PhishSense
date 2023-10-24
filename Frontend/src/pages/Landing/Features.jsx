import edu from './../../assets/edu.svg';
import link from './../../assets/link.svg';
import correct from './../../assets/correct.svg';
import risk from './../../assets/risk.svg';
import Feature from '../../components/Feature';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const featuresDesc = [
    {
        title: "Link Verification.",
        icon: link,
        body: "Users can input links into the platform, which will then be analyzed by advanced AI algorithms to determine their authenticity and potential security risks."
    },
    {
        title: "Phishing and Scam Detection",
        icon: correct,
        body: "The AI system will identify and flag phishing attempts, scams, or malicious content, providing users with immediate alerts and guidance on how to proceed."
    },
    {
        title: "Risk Mitigation",
        icon: risk,
        body: "The platform will offer recommendations and actions to mitigate the risks associated with suspicious links, protecting users from potential data breaches or identity theft."
    },
    {
        title: "User Education",
        icon: edu,
        body: "The platform will also focus on educating users about online security best practices, empowering them to make informed decisions while navigating the digital landscape."
    }
]

const Features = () => {
    return (
        <section className="px-6 lg:px-10 pt-16 pb-20 w-full">
            <h2 className="lg:text-5xl text-2xl text-[#003559] mb-20 mt-7 font-bold text-center">The PhishSense <span className="text-blue">Advantage</span></h2>
            <div className='flex items-center flex-col lg:flex-row space-y-10 lg:space-y-0 mb-20 justify-center space-x-7'>
                {
                    featuresDesc.map((feature, id) => {
                        return (
                            <Feature key={id} icon={feature.icon} title={feature.title} body={feature.body} />
                        )
                    })
                }
            </div>
            <div className='w-full'>
                <Button text="Start today" />
            </div>
        </section>
    )
}

export default Features;