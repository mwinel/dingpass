import SectionTitle from '../SectionTitle/SectionTitle';
import SectionSubtitle from '../SectionSubtitle/SectionSubtitle';
import Button from '../Button/Button';
import HowItWorksCard from './HowItWorksCard';
import { Calendar, CreditCard, Ticket } from '../../icons';

export default function HowItWorks() {
    return (
        <section>
            <div className="flex items-center justify-between">
                <div>
                    <SectionTitle>Find your next adventure</SectionTitle>
                    <SectionSubtitle>
                        Save time, energy and money – find and book your next
                        adventure 100% online.
                    </SectionSubtitle>
                </div>
                <div>
                    <Button tertiary>Learn More</Button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-12 mt-6">
                <HowItWorksCard
                    title="Search Instantly"
                    text="Search for your perfect adventure. Our detailed
                        descriptions will help you make your decision."
                    icon={
                        <Calendar
                            className="mb-3 w-14 h-14 text-emerald-600"
                            strokeWidth={1}
                        />
                    }
                />
                <HowItWorksCard
                    title="Make Payment"
                    text="Make secure payment with you favorite payment method to
                    reserve a seat to your next adventure."
                    icon={
                        <CreditCard
                            className="mb-3 text-emerald-600 w-14 h-14"
                            strokeWidth={1}
                        />
                    }
                />
                <HowItWorksCard
                    title="Instant Reservations"
                    text="Get your reservation ticket instantly on your mobile
                    number or email with the necessary next steps"
                    icon={
                        <Ticket
                            className="mb-3 text-emerald-600 w-14 h-14"
                            strokeWidth={1}
                        />
                    }
                />
            </div>
        </section>
    );
}
