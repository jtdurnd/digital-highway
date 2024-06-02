import { useState, useCallback } from "react";
import InstagramPost from "../../../components/community/instagramWeb/InstagramPost";
import SearchSidebar1 from "../../../components/community/instagramWeb/SearchSidebar1";
import PortalDrawer from "../../../components/community/instagramWeb/PortalDrawer";
import { useNavigate } from "react-router-dom";
import FollowSidebar1 from "../../../components/community/instagramWeb/FollowSidebar1";
import "./InstaWebMain.css";

const InstaWebMain = () => {
  const [isSearchSidebarOpen, setSearchSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const [isFollowSidebarOpen, setFollowSidebarOpen] = useState(false);

  const openSearchSidebar = useCallback(() => {
    setSearchSidebarOpen(true);
  }, []);

  const closeSearchSidebar = useCallback(() => {
    setSearchSidebarOpen(false);
  }, []);

  const onSidePostButtonClick = useCallback(() => {
    navigate("/community/instagramWeb/writepost");
  }, [navigate]);

  const openFollowSidebar = useCallback(() => {
    setFollowSidebarOpen(true);
  }, []);

  const closeFollowSidebar = useCallback(() => {
    setFollowSidebarOpen(false);
  }, []);

  const homeButtonClick = useCallback(() => {
    navigate("/community/instagramWeb/");
  }, [navigate]);

  return (
    <>
      <div className="outsta-instawebmain">
        <InstagramPost />
        <div className="outsta-sidebar">
          <button className="outsta-instagrambutton" onClick={homeButtonClick}>
            <img
              className="outsta-mdiinstagram-icon"
              alt=""
              src="/community/instagramWeb/mdiinstagram.svg"
            />
            <div className="outsta-instagrambutton-child" />
          </button>
          <button className="outsta-homebutton" id="HomeButton" onClick={homeButtonClick}>
            <img
              className="outsta-material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/materialsymbolshome.svg"
            />
            <div className="outsta-homebutton-child" />
          </button>
          <button
            className="outsta-magnifybutton"
            id="MainPageSearch"
            onClick={openSearchSidebar}
          >
            <img
              className="outsta-material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/phmagnifyingglass.svg"
            />
            <div className="outsta-homebutton-child" />
          </button>
          <div className="outsta-compassbutton">
            <img
              className="outsta-material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/mdicompassoutline.svg"
            />
            <div className="outsta-homebutton-child" />
          </div>
          <div className="outsta-sideheartbutton">
            <img
              className="outsta-material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/phheart.svg"
            />
            <div className="outsta-homebutton-child" />
          </div>
          <button
            className="outsta-sidepostbutton"
            id="PostWriteButton"
            onClick={onSidePostButtonClick}
          >
            <img
              className="outsta-material-symbolshome-icon"
              alt=""
              src="/community/instagramWeb/f7plusapp.svg"
            />
            <div className="outsta-homebutton-child" />
          </button>
          <button
            className="outsta-followbutton"
            id="HomeButton"
            onClick={openFollowSidebar}
          >
            <div className="outsta-homebutton-child" />
            <img
              className="outsta-solaruser-outline-icon"
              alt=""
              src="/community/instagramWeb/solaruseroutline.svg"
            />
          </button>
        </div>
      </div>
      {isSearchSidebarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeSearchSidebar}
        >
          <SearchSidebar1 onClose={closeSearchSidebar} />
        </PortalDrawer>
      )}
      {isFollowSidebarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeFollowSidebar}
        >
          <FollowSidebar1 onClose={closeFollowSidebar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default InstaWebMain;