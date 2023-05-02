import { useNavigate } from "react-router-dom";
import Popup from "../PopUp/Popup";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../..";
import Context from "../../store/AuthContext";
import { toast } from "react-hot-toast";
import OneCommunity from "../Community/OneCommunity";
import Loader from "../Loader/Loader";
import logo from '../../assets/logo.png'

const Home = () => {
  const {
    setIsAuthenticated,
    setUser,
    setMyCommunities,
    mycommunities,
    user,
    setLoading,
    loading,
  } = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/v1/user/me`, {
          withCredentials: true,
        });
        setUser(data.data);
        setIsAuthenticated(true);
      } catch (error) {
        setUser({});
        setIsAuthenticated(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/v1/community/my-community`,
          {
            withCredentials: true,
          }
        );
        setLoading(false);
        setMyCommunities(data.data);
      } catch (error) {
        setLoading(false);
        console.log(error.response.data.errors);
      }
    })();
  }, []);

  const logoutHandler = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/v1/auth/logout`, {
        withCredentials: true,
      });
      toast.success("Logged out successfully");
      setUser({});
      setIsAuthenticated(false);
    } catch (error) {
      setIsAuthenticated(true);
      toast.error(error.response.data.message);
    }
  };

  const hireCandidateHandler = () => {
    navigate("/hire-candidates");
  };
  const createCommunityHandler = () => {
    navigate("/create-community");
  };
  const joinCommunityHandler = () => {
    navigate("/available-communities");
  };

  

  const items =
    user.role === "Recruiter"
      ? [
          { name: "Hire Candidates", onClickCreate: hireCandidateHandler },
          {
            name: "Create a new community",
            onClickCreate: createCommunityHandler,
          },
          { name: "Logout", onClickCreate: logoutHandler },
        ]
      : [
          { name: "Join a new community", onClickCreate: joinCommunityHandler },
          { name: "Logout", onClickCreate: logoutHandler },
        ];
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="top-heading">Rise Communities
        <div className="group-img"><img className="logo-img" src={logo} alt=""/></div>
      </div>
      {mycommunities.length > 0 ? (
        mycommunities.map((community) => {
          return (
            <OneCommunity
              key={community?._id}
              name={community?.name}
              link={"View -->"}
              id={community?._id}
            />
          );
        })
      ) : (
        <div className="no-community">No Community Found</div>
      )}
      <Popup items={items} />
    </>
  );
};

export default Home;
