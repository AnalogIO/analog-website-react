import React from 'react';

class Applypage extends React.Component {

    render() {

        return (
            <div>
                <h1>What is Café Analog?</h1>
                <p style={{whiteSpace:'pre-line'}}>{
                    "Analog is ITU’s student-driven,\n" +
                    "non-profit café, serving coffee and tea\n" +
                    "to more than 100 students a day. We’re comprised\n" +
                    "of about 60 students of all majors, nationalities\n" +
                    "and ages, working together to make Analog\n" +
                    "the best, most “hygge”, place on ITU.\n\n" +
                    "Analog is an organization\n" +
                    "with a flat structure.\n" +
                    "We elect a new board, called Analogen, every semester,\n" +
                    "but we are at no different level than any\n" +
                    "other volunteer --\n" +
                    "we all started as baristas just like you."
                }</p>
                <h1>What we are expecting from you as a volunteer</h1>
                <p style={{whiteSpace:'pre-line'}}>{
                    "Keeping a café open from 8-18 every week day is hard work\n" +
                    "and so, volunteering in Analog requires trust.\n" +
                    "....."
                }</p>
            </div>
        );
    }
}

export default Applypage;