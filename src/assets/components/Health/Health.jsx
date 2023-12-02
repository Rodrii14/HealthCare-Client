import Card from "./Card/Card";
import PressureCard from "./Card/PressureCard";
import InputsCard from "./Card/InputsCard/InputsCard";
import Graphics from "./Card/Graphics/Graphics";
import BarraNav from "../Navbar/nav";
import FooterHP from "../Homepage/Sections/FooterHP";

const Health = () => {

    return (
        <div className="bg-background flex flex-col font-font">
            <BarraNav />
      
            {/* Cars section */}
            <section className="p-8 w-full lg:h-screen xl:h-screen bg-healthSection1 bg-no-repeat bg-center bg-cover
            flex flex-row flex-wrap place-content-center place-items-center gap-4">
                <InputsCard bgIcon={"bg-[#D8FFE0]"} icon={"healthicons:weight-outline"} color={"#00FC37"} barColor={"bg-[#00FC37]"}
                    tittle={"Peso"} unit={"kg"} minValue={53.5} midValue={104.35} maxValue={150} endpoint={"weight"}
                />

                <InputsCard bgIcon={"bg-[#FFFBA4]"} icon={"material-symbols:body-fat-rounded"} color={"#FFD600"} barColor={"bg-[#FFD600]"}
                    tittle={"Grasa Corporal"} unit={"%"} minValue={13} midValue={31} maxValue={40} endpoint={"body"}
                />
                <InputsCard bgIcon={"bg-[#FFC37B]"} icon={"healthicons:gallbladder-outline"} color={"#FF8A00"} barColor={"bg-[#FF8A00]"}
                    tittle={"Colesterol"} unit={"mg/dL"} minValue={170} midValue={190} maxValue={300} endpoint={'colesterol'}
                />

                <InputsCard bgIcon={"bg-[#FDCBF5]"} icon={"icon-park-outline:muscle"} color={"#FB19C9"} barColor={"bg-[#FB19C9]"}
                    tittle={"Masa Muscular"} unit={"kg"} minValue={30} midValue={90} maxValue={150} endpoint={'muscular'}
                />

                <PressureCard bgIcon={"bg-[#78C4CE]"} icon={"healthicons:blood-pressure"} color={"#0082BB"}
                    tittle={"Presión Arterial"} endpoint={"pressure"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />

                <InputsCard bgIcon={"bg-[#FCBABA]"} icon={"material-symbols:glucose-outline"} color={"#FD4747"} barColor={"bg-[#FD4747]"}
                    tittle={"Glucosa en la Sangre"} unit={"mg/dL"} minValue={70} midValue={100} maxValue={150} endpoint={'glucose'}
                />
            </section>


            {/* ************************************************************************************** */}
            //Input and Graphics section
            <section id="inputWeight" className="py-8 px-4 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-20 bg-background">
                <Card section={"#inputWeight"} bgIcon={"bg-[#D8FFE0]"} icon={"healthicons:weight-outline"} color={"#00FC37"} barColor={"bg-[#00FC37]"} tittle={"Peso"} unit={"kg"} minValue={45.35} midValue={104.35} maxValue={150} endpoint={"weight"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
                <Graphics title={"Peso"} barColor={"rgb(0, 252, 55)"} endpoint={"weight"} />
            </section>

            <section id="inputFat" className="py-8 px-4 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-20 bg-background">
                <Card section={"#inputFat"} bgIcon={"bg-[#FFFBA4]"} icon={"material-symbols:body-fat-rounded"} color={"#FFD600"} barColor={"bg-[#FFD600]"} tittle={"Grasa Corporal"} unit={"%"} minValue={10.6} midValue={19.7} maxValue={24.6} endpoint={"body"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
                <Graphics title={"Grasa Corporal"} barColor={"rgb(255, 214, 0)"} endpoint={"body"} />
            </section>

            <section id="inputColesterol" className="py-8 px-4 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-20 bg-background">
                <Card section={"#inputColesterol"} bgIcon={"bg-[#FFC37B]"} icon={"material-symbols:body-fat-rounded"} color={"#FF8A00"} barColor={"bg-[#FF8A00]"} tittle={"Colesterol"} unit={"mg/dL"} minValue={200} midValue={239} maxValue={300} endpoint={"colesterol"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
                <Graphics title={"Colesterol"} barColor={"rgb(255, 138, 0)"} endpoint={"colesterol"} />

            </section>

            <section id="inputMuscle" className="py-8 px-4 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-20 bg-background">
                <Card section={"#inputMuscle"} bgIcon={"bg-[#FDCBF5]"} icon={"icon-park-outline:muscle"} color={"#FB19C9"} barColor={"bg-[#FB19C9]"} tittle={"Masa Muscular"} unit={"kg"} minValue={30} midValue={90} maxValue={150} endpoint={"muscular"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
                <Graphics title={"Masa muscular"} barColor={"rgb(251, 25, 201)"} endpoint={"muscular"} />

            </section>

            <section id="inputGlucose" className="py-8 px-4 w-full flex flex-col xl:flex-row justify-center items-center xl:gap-20 bg-background">
                <Card section={"#inputGlucose"} bgIcon={"bg-[#FCBABA]"} icon={"material-symbols:glucose-outline"} color={"#FD4747"} barColor={"bg-[#FD4747]"} tittle={"Glucosa en la Sangre"} unit={"mg/dL"} minValue={70} midValue={100} maxValue={150} endpoint={"glucose"} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4" />
                <Graphics title={"Glucosa en la sangre"} barColor={"rgb(253, 71, 71)"} endpoint={"glucose"} />

            </section>
            <FooterHP />
        </div>//div main
    );
}

export default Health;