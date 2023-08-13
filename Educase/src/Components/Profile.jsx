import "../Style/Profile.css";
import "../Style/Common.css"
const Profile = () => {
  return (
    <div>
      <div className="parent-container">
        <div className="child">
          <h4 className="heading">Account Setting</h4>

          <div className="info-box">
            <div className="image-box">
              <img
                src="https://w7.pngwing.com/pngs/613/636/png-transparent-computer-icons-user-profile-male-avatar-avatar-heroes-logo-black-thumbnail.png"
                alt=""
              />
            </div>

            <div>
              <p className="heading">Yogesh</p>
              <p>yogi27518@gmail.com</p>
            </div>
          </div>

          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              tenetur temporibus ullam, et qui voluptatibus laboriosam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
