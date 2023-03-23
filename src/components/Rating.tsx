import { useState } from "react";
import star from '../icon-star.svg'
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";

type Props = {
    onRateSelected: (rate: number) => void
};

export function Rating(props: Props) {
    const [rateSelected, setRateSelected] = useState<number>();
    return (
        <div className={'card'}>
            <div className={'star'}>
                <img src={star} alt={'star'}/>
            </div>

            <Title text={'How did we do?'}/>

            <Paragraph
                text={'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'}/>

            <div className={'ratings'}>
                {[1, 2, 3, 4, 5].map((rating, idx) => (
                    <button className={`rate ${rateSelected === rating ? 'selected' : ''}`} key={idx}
                            onClick={() => setRateSelected(rating)}>
                        {rating}
                    </button>
                ))}
            </div>

            <button className={`submit ${!rateSelected ? 'forbidden' : ''}`}
                    disabled={!rateSelected} onClick={() => props.onRateSelected(rateSelected!)}>
                Submit
            </button>
        </div>
    );
};