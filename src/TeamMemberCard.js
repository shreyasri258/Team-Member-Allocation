import Femaleimage from "./images/Femaleimage.jpg";
import Maleimage from "./images/Maleimage.jpg";

const TeamMemberCard = ({
  employee,
  handleEmployeeCardClick,
  selectedTeam,
}) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}
    >
      {employee.gender === "male" ? (
        <img src={Maleimage} className="card-img-top"></img>
      ) : (
        <img src={Femaleimage} className="card-img-top"></img>
      )}

      <div className="card-body">
        <h2 className="card-title">Full Name:{employee.fullName}</h2>
        <h4 className="card-text">Designation:{employee.designation}</h4>
      </div>
    </div>
  );
};
export default TeamMemberCard;
