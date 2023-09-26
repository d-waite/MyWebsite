import * as React from 'react';

type Props = {
    imageHref: string;
    link: string;
}


export default function Icon(props: Props) {

    return (
        <div className="p-3">
            <a href={props.link} target="_blank">
                <img src={props.imageHref} />
            </a>
        </div>
    )


};