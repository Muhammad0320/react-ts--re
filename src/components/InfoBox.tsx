import { FC, PropsWithChildren } from "react";



// Working with discriminated unions

type HintInfoType = PropsWithChildren<{ mode: 'hint' }>;

type WarningInfoType = PropsWithChildren<{ mode: 'warning', severity: 'low' | 'high' | 'medium' }>

type InfoBoxTypes =  HintInfoType | WarningInfoType;


const InfoBox: FC<InfoBoxTypes> = (props) => {

    const {mode, children} = props

  if (mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p> {children} </p>
      </aside>
    );
  }


  const {severity} = props

  
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2> Warning </h2>

      <p> {children} </p>
    </aside>
  );
};

export default InfoBox;
