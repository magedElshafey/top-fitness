import React, { useState } from "react";
import style from "./calories.module.css";
const Calories = ({ data, lang }) => {
  const [showMaintenace, setShowMaintenance] = useState(true);
  const [showCutting, setShowCutting] = useState(false);
  const [showBulking, setShowBulking] = useState(false);
  const handleMaintenance = () => {
    setShowCutting(false);
    setShowBulking(false);
    setShowMaintenance(true);
  };
  const handleCutting = () => {
    setShowMaintenance(false);
    setShowBulking(false);
    setShowCutting(true);
  };
  const handleBulking = () => {
    setShowMaintenance(false);
    setShowCutting(false);
    setShowBulking(true);
  };
  return (
    <>
      <div className="row justify-content-center align-items-center mt-3 gap-5 mb-5">
        <div className="col-12 col-md-4">
          <p className="fw-bolder mb-4 ">your maintenance calories</p>
          <div className={`${style.box} ${style.boxOne}`}>
            <div>
              <h2 className={`mb-0 fw-bolder ${style.color}`}>
                {Math.floor(+data.calroies)}
              </h2>
              <span>Calories per Day</span>
            </div>
          </div>
          <div className={style.box}>
            <div>
              <h2 className={`mb-0 fw-bolder ${style.color}`}>
                {Math.floor(+data.calroies) * 7}
              </h2>
              <span>Calories per week</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          {/*desc*/}
          <div className={`pb-3 ${style.descContainer}`}>
            based on your stats . the best estimate for your maintenance
            calories is{" "}
            <p className="fw-bolder d-inline-block mx-1">
              {Math.floor(+data.calroies)}
            </p>
            calories per day . the below table shows the difference if you were
            to have selecteda different activity level
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">BMR</div>
            <div className="col-5">{Math.floor(data.bmr)} calories per day</div>
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">Sedentary</div>
            <div className="col-5">
              {Math.floor(+data.bmr * 1.1)} calories per day
            </div>
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">light exercise</div>
            <div className="col-5">
              {Math.floor(+data.bmr * 1.2)} calories per day
            </div>
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">moderate exercise</div>
            <div className="col-5">
              {Math.floor(+data.bmr * 1.5)} calories per day
            </div>
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">heavy exercise</div>
            <div className="col-5">
              {Math.floor(+data.bmr * 1.7)} calories per day
            </div>
          </div>
          <div
            className={`py-3  row justify-content-center gap-5 ${style.descContainer}`}
          >
            <div className="col-5">athelete</div>
            <div className="col-5">
              {Math.floor(+data.bmr * 2)} calories per day
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
        <button
          onClick={handleMaintenance}
          className={`${style.tabBtn} ${showMaintenace ? style.active : ""}`}
        >
          maintenance
        </button>
        <button
          onClick={handleCutting}
          className={`${style.tabBtn} ${showCutting ? style.active : ""}`}
        >
          Cutting
        </button>
        <button
          onClick={handleBulking}
          className={`${style.tabBtn} ${showBulking ? style.active : ""}`}
        >
          Bulking
        </button>
      </div>
      {showMaintenace && (
        <div className="row justify-content-center mb-5">
          <div className={`col-6  ${style.detailsBox}`}>
            <div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(+data.calroies)}g
                </h2>
                <span>Calories per day</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor((+data.calroies * 0.2) / 4)}g
                </h2>
                <span>Protien</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor((+data.calroies * 0.5) / 4)}g
                </h2>
                <span>Carb</span>
              </div>
              <div className={`py-3`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor((+data.calroies * 0.3) / 9)}g
                </h2>
                <span>fats</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {showCutting && (
        <div className="row justify-content-center mb-5">
          <div className={`col-6  ${style.detailsBox}`}>
            <div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(+data.calroies - 500)}g
                </h2>
                <span>Calories per day</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(+data.weight * 1.35)}g
                </h2>
                <span>Protien</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(((+data.calroies - 500) * 0.55) / 4)}g
                </h2>
                <span>Carb</span>
              </div>
              <div className={`py-3`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(((+data.calroies - 500) * 0.275) / 9)}g
                </h2>
                <span>fats</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {showBulking && (
        <div className="row justify-content-center mb-5">
          <div className={`col-6  ${style.detailsBox}`}>
            <div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(+data.calroies + 500)}g
                </h2>
                <span>Calories per day</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(((+data.calroies + 500) * 0.35) / 4)}g
                </h2>
                <span>Protien</span>
              </div>
              <div className={`py-3 ${style.detailsContainer}`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(((+data.calroies + 500) * 0.55) / 4)}g
                </h2>
                <span>Carb</span>
              </div>
              <div className={`py-3`}>
                <h2 className={`mb-0 fw-bolder ${style.color}`}>
                  {Math.floor(((+data.calroies + 500) * 0.2) / 9)}g
                </h2>
                <span>fats</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calories;
