import React, { Component } from 'react';
import Qoutation from "./Qoutation";
import CareerTimeline from "./Timeline";
import Birth from "./Birth"
import Achievements from "./Achievements"


class BioContent extends Component {
    constructor(){
        super();
        this.state = {
            birth:{},
            jobs:[],
            achievements:[],
            qoutation:""
        }
    }
    
    componentWillMount(){
        this.setState({
            birth:{
                birth_and_history:"ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي.ولد في مدينة أم القيوين بتاريخ 1952/10/01 م, متزوج من كريمة صاحب السمو الشيخ/ صقر بن محمد القاسمي."
            },
            jobs:[
                    {
                        image:require("../../resources/newsImage.png"),
                        history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                        content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
                    },
                    {
                        image:require("../../resources/newsImage.png"),
                        history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                        content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
                    },
                    {
                        image:require("../../resources/newsImage.png"),
                        history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                        content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
                    },
                    {
                        image:require("../../resources/newsImage.png"),
                        history:"عمل معيداََ, ومدرساََ مساعداََ, ومدرسا, وأستاذاََ مساعداََ للعقيدة والفلسفه بجامعة اﻷزهر, وحالياََ أستاذ للعقيدة",
                        content:"قال فضلت الامام الكبار: ان القرآنا الكريم استعمال منذ اسلوب الاحوارمع الشباب, وليس اسلوب الملا والأمر والنهي وعرضلنا النموذجين أحدهما الشعب المتمردالذيياستعلى وايستكبار ولا يستجيب والنموذج الأأخر للشعب الوع المتدابار الذي يع ما"
                    }
                ],
            achievements:[
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    },
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    },
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    },
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    },
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    },
                    {
                        title:"رئيس جامعة اﻷزهر",
                        date:"28 سبتمبر 2003 - 19 مارس 2010",
                        content:"قال فضيلة الإمام اﻷكبر: إن القرءآن الكريم استعمل منذ البداية أسلوب الحوار مع الشباب, وليس أسلوب الإملاء واﻷمر والنهى, وعرض لنموذجين: أحدهما للشاب المتمرد الذي يسعلي ويستكبر ولا يستجيب."
                    }

            ],
            qoutation:"إن المسلمين صنعوا حضارة راقية قامت على العلم والمعرفة والتجربة, وسعد بها الناس شرقاََ وغرباََ, تحت ظلال هذا الدين الحنيف."
        });
    }
    
    render() {
        return (
            <div className="content">

                <div className="bio">
                    <div className="bio_header">
                        <label>السيرة الذاتية</label>
                        <img className="underline" src={require("../../resources/underline.png")}/>
                    </div>

                    <div className="bio_content">

                        <Birth birth={this.state.birth}/>

                        <CareerTimeline jobs={this.state.jobs}/>

                        // Positions section

                        <Achievements achievements={this.state.achievements}/>

                    </div>
                </div>

                <Qoutation qoutation ={this.state.qoutation}/>

            </div>
        );
    }
}

export default BioContent;