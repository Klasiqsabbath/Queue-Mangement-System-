import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment, deleteAppointment } =
    useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken, getAllAppointments]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>
      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Actions</p>
        </div>

        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <Link to={`/appointment/${item._id}`} className="flex items-center gap-2">
              <img
                className="w-8 rounded-full"
                src={item.userData?.image || assets.upload_area}
                alt=""
              />{" "}
              <p>{item.userData?.name || "Unknown patient"}</p>
            </Link>
            <p className="max-sm:hidden">
              {item.userData?.dob ? calculateAge(item.userData.dob) : "-"}
            </p>
            <p>
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>
            <Link to={`/appointment/${item._id}`} className="flex items-center gap-2">
              <img
                className="w-8 rounded-full bg-gray-200"
                src={item.docData?.image || assets.upload_area}
                alt=""
              />{" "}
              <p>{item.docData?.name || "Unknown doctor"}</p>
            </Link>
            <p>
              {currency}
              {item.amount}
            </p>
            {item.cancelled ? (
              <div className="flex items-center gap-2">
                <p className="text-red-400 text-xs font-medium">Cancelled</p>
                <img
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (window.confirm("Delete this cancelled booking?")) {
                      deleteAppointment(item._id);
                    }
                  }}
                  className="w-10 cursor-pointer"
                  src={assets.cancel_icon}
                  alt="Delete"
                />
              </div>
            ) : item.isCompleted ? (
              <p className="text-green-500 text-xs font-medium">Completed</p>
            ) : (
              <img
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (window.confirm("Cancel this booking?")) {
                    cancelAppointment(item._id);
                  }
                }}
                className="w-10 cursor-pointer"
                src={assets.cancel_icon}
                alt=""
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
