import { Paragraph } from "./Paragraph";
import { Title } from "./Title";
import thankyou from "../thank-you.svg";

type Props = {
    rate: number;
    reset: () => void;
};

export function ThankYou(props: Props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span className={'reset'} onClick={props.reset}>Reset</span>
            <div className={`${'card'} ${'thank-you'}`}>
                <img src={thankyou} alt={'thank you'}/>

                <div className={'given-rate'}>{`You selected ${props.rate} out of 5`}</div>

                <Title text={'Thank You!'}/>

                <Paragraph
                    text={`We appreciate you taking the time to giving a rating. If you ever need more support, don't hesitate to get in touch!`} styles={{textAlign: 'center'}}/>
            </div>
        </div>
    );
}