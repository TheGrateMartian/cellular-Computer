import React from 'react';
import {Pairs} from '../const/pairs';
import '../css/Game.css'
function Game() {
    const [current, setCurrent] = React.useState(null);
    const [selected, setSelected] = React.useState({});
    const [containerAnim, setContainerAnim] = React.useState(false);
    const [arrays, setArrays] = React.useState({left: [], right: []})
    const [popUp, setPopUp] = React.useState({first: {img: null, text: ""}, second: {img: null, text: ""}})

    function isMatch(valueA, valueB){
        return Pairs.findIndex(({right, left}) =>
            (right === valueA && left === valueB) ||
            (right === valueB && left === valueA)
        )
    }

    function correct(index) {
        setPopUp({
            first:
                {img: Pairs[index].firstImage, text: Pairs[index].left},
            second:
                {img: Pairs[index].secondImage, text: Pairs[index].right}
        })
    }

    function choose(choice){
        if (current) {
            let index = isMatch(current, choice);
            if (index !== -1) {
                correct(index);
                setSelected((val) => ({ ...val, [choice]: true }));
            } else {
                console.log(2)
                setContainerAnim(true);

                setSelected((val) => ({ ...val, [current]: false }));
            }
            setCurrent(null);
        } else {

            setSelected((val) => ({ ...val, [choice]: true }));
            setCurrent(choice)
        }
    }

    React.useEffect(() => {
        let left = Pairs.map((v) => v.left);
        let right = Pairs.map((v) => v.right);
        shuffleArray(left)
        shuffleArray(right)
        setArrays({left: left, right: right})
    }, [])

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <>
            <div className={'popUp' + (popUp.first.img ? ' show' : '')}>
                <div className={"vs"}>
                    <div style={{background: '#204ba7', borderRadius: '20px 0 0 20px '}}>
                        <h1>{popUp.first.text}</h1>
                        <img src={popUp.first.img} alt={popUp.first.text}/>
                    </div>
                    <div style={{background: '#ee965b', borderRadius: '0 20px 20px 0'}}>
                        <h1>{popUp.second.text}</h1>
                        <img src={popUp.second.img} alt={popUp.second.text}/>
                    </div>
                </div>
                <button onClick={() => setPopUp({first: {img: null, text: ""}, second: {img: null, text: ""}})} >Close</button>
            </div>
        <div
            className={'gameContainer' + (containerAnim ? ' gameAnim' : '')}
            onAnimationEnd={() => setContainerAnim(false)}
        >
            <div className="column">
                <p>Cell</p>
                {
                    arrays.left.map((i) => {
                        return <button
                            key={i}
                            onClick={() => choose(i)}
                            disabled={!!selected[i]}
                            className={ current && current === i ? "selected" : "" }
                        >
                            {i}
                        </button>
                    })
                }
            </div>
            <div className="column">
                <p>Computer</p>
                {
                    arrays.right.map((i) => {
                        return <button
                            key={i}
                            onClick={() => choose(i)}
                            disabled={!!selected[i]}
                            className={ current && current === i ? "selected" : "" }
                        >
                            {i}
                        </button>
                    })
                }
            </div>
        </div>
        </>
    );
}

export default Game;
