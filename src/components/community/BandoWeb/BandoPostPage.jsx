import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BandoPostPage.css";

const BandoPostPage = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBandoPopupCloseIconClick = useCallback(() => {
    navigate("/community/bandoWeb/");
  }, [navigate]);

  return (
    <div className={`bandopostpage ${className}`}>
      <div className="bandopopupbackground" />
      <div className="bandopostbody">
        <div className="bandopopupcontainer" />
        <div className="bandopopupunderbar" />
        <div className="bandotextinputsettingbox" />
        <div className="bandofontstylesettingbox" />
        <textarea
          className="bandowritingbodybox"
          placeholder="새로운 소식을 남겨보세요. 공개밴드에 남긴 글은 누구나 볼 수 있습니다."
        />
        <textarea
          className="bandowritingtitlebox"
          placeholder="제목을 작성하세요"
        />
        <div className="bandopostsettingbutton" />
        <div className="bandotextsubmitbutton" />
        <div className="bandodiv">올리기</div>
        <img
          className="ant-designsetting-outlined-icon"
          alt=""
          src="/community/BandoWeb/antdesignsettingoutlined.svg"
        />
        <div className="bandodiv1">글쓰기설정</div>
        <img
          className="tablertext-size-icon"
          alt=""
          src="/community/BandoWeb/tablertextsize.svg"
        />
        <img
          className="carbontext-bold-icon"
          alt=""
          src="/community/BandoWeb/carbontextbold.svg"
        />
        <img
          className="tableritalic-icon"
          alt=""
          src="/community/BandoWeb/tableritalic.svg"
        />
        <img
          className="mingcuteunderline-line-icon"
          alt=""
          src="/community/BandoWeb/mingcuteunderlineline.svg"
        />
        <img
          className="tablerstrikethrough-icon"
          alt=""
          src="/community/BandoWeb/tablerstrikethrough.svg"
        />
        <img
          className="ioncolor-fill-icon"
          alt=""
          src="/community/BandoWeb/ioncolorfill.svg"
        />
        <img
          className="hugeiconsimage-01"
          alt=""
          src="/community/BandoWeb/hugeiconsimage01.svg"
        />
        <img
          className="fluentemoji-16-regular-icon"
          alt=""
          src="/community/BandoWeb/fluentemoji16regular.svg"
        />
        <img
          className="lets-iconsvideo-light"
          alt=""
          src="/community/BandoWeb/letsiconsvideolight.svg"
        />
        <img
          className="rilive-line-icon"
          alt=""
          src="/community/BandoWeb/riliveline.svg"
        />
        <img
          className="pepicons-pencilline-y"
          alt=""
          src="/community/BandoWeb/pepiconspencilliney.svg"
        />
        <img
          className="phchart-bar-light-icon"
          alt=""
          src="/community/BandoWeb/phchartbarlight@2x.png"
        />
        <img
          className="ant-designpaper-clip-outlined-icon"
          alt=""
          src="/community/BandoWeb/antdesignpaperclipoutlined.svg"
        />
        <img
          className="uilcalender-icon"
          alt=""
          src="/community/BandoWeb/uilcalender.svg"
        />
        <img
          className="solarchecklist-minimalistic-l-icon"
          alt=""
          src="/community/BandoWeb/solarchecklistminimalisticlinear.svg"
        />
        <img
          className="midocument-check-icon"
          alt=""
          src="/community/BandoWeb/midocumentcheck.svg"
        />
        <img
          className="mdiuser-check-outline-icon"
          alt=""
          src="/community/BandoWeb/mdiusercheckoutline.svg"
        />
        <img
          className="material-symbolsquiz-outline-icon"
          alt=""
          src="/community/BandoWeb/materialsymbolsquizoutline.svg"
        />
        <img
          className="mdiform-select-icon"
          alt=""
          src="/community/BandoWeb/mdiformselect.svg"
        />
        <img
          className="jammore-horizontal-icon"
          alt=""
          src="/community/BandoWeb/jammorehorizontal.svg"
        />
      </div>
      <div className="bandoposttitle">
        <div className="bandopopupbackground" />
        <img
          className="bandopopupcloseicon"
          alt=""
          src="/community/BandoWeb/bandopopupcloseicon.svg"
          onClick={onBandoPopupCloseIconClick}
        />
        <div className="bandopopupclosebutton" />
        <b className="bandob">글쓰기</b>
        <div className="bandowriteboxtitle" />
      </div>
    </div>
  );
};

BandoPostPage.propTypes = {
  className: PropTypes.string,
};

export default BandoPostPage;
