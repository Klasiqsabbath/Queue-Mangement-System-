import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AppointmentDetails = () => {
  const { aToken, appointments, getAllAppointments, updateAppointment } =
    useContext(AdminContext);
  const { slotDateFormat, currency } = useContext(AppContext);
  const { appointmentId } = useParams();

  useEffect(() => {
    if (aToken && appointments.length === 0) {
      getAllAppointments();
    }
  }, [aToken, appointments.length, getAllAppointments]);

  const appointment = appointments.find((item) => item._id === appointmentId);
  const patientPhone = appointment?.userData?.phone || "No phone available";
  const visitReason = appointment?.reason || "No reason provided";

  const handleSaveAppointment = async () => {
    await updateAppointment(appointmentId, {
      cancelled: false,
      isCompleted: false,
    });
  };

  const handleCompleteAppointment = async () => {
    await updateAppointment(appointmentId, {
      cancelled: false,
      isCompleted: true,
    });
  };

  if (!appointment) {
    return (
      <div className="w-full max-w-5xl m-5 bg-white border rounded p-6">
        <Link to="/all-appointments" className="text-sm text-blue-600">
          ← Back to appointments
        </Link>
        <p className="mt-4 text-gray-500">Loading appointment details...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl m-5 bg-white border rounded p-6">
      <Link to="/all-appointments" className="text-sm text-blue-600">
        ← Back to appointments
      </Link>

      <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-500">Booked appointment</p>
              <h2 className="text-xl font-semibold text-gray-800">
                {appointment.userData?.name || "Unknown patient"}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              {appointment.cancelled ? (
                <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm">
                  Cancelled
                </span>
              ) : appointment.isCompleted ? (
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                  Completed
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                  Active
                </span>
              )}
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {appointment.cancelled ? "Cancelled" : appointment.isCompleted ? "Completed" : "Active"}
              </span>
            </div>
          </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <p className="text-sm font-semibold text-gray-600">Patient</p>
            <div className="flex items-center gap-3 mt-2">
              <img
                className="w-10 rounded-full"
                src={appointment.userData?.image || assets.upload_area}
                alt=""
              />
              <div>
                <p className="font-medium text-gray-800">
                  {appointment.userData?.name || "Unknown patient"}
                </p>
                <p className="text-sm text-gray-500">
                  {appointment.userData?.email || "No email available"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Phone: {patientPhone}
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded p-4">
            <p className="text-sm font-semibold text-gray-600">Doctor</p>
            <div className="flex items-center gap-3 mt-2">
              <img
                className="w-10 rounded-full bg-gray-200"
                src={appointment.docData?.image || assets.upload_area}
                alt=""
              />
              <div>
                <p className="font-medium text-gray-800">
                  {appointment.docData?.name || "Unknown doctor"}
                </p>
                <p className="text-sm text-gray-500">
                  {appointment.docData?.speciality || "General care"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-gray-600">Appointment details</p>
            <div className="flex flex-wrap gap-2">
              {appointment.cancelled ? (
                <button
                  onClick={handleSaveAppointment}
                  className="rounded bg-blue-600 px-3 py-2 text-sm text-white"
                >
                  Re-save appointment
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSaveAppointment}
                    className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700"
                  >
                    Save appointment
                  </button>
                  <button
                    onClick={handleCompleteAppointment}
                    className="rounded bg-green-600 px-3 py-2 text-sm text-white"
                  >
                    Mark completed
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mt-3 text-sm text-gray-700">
            <div>
              <p className="text-gray-500">Date</p>
              <p className="font-medium">{slotDateFormat(appointment.slotDate)}</p>
            </div>
            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{appointment.slotTime}</p>
            </div>
            <div>
              <p className="text-gray-500">Fee</p>
              <p className="font-medium">
                {currency}
                {appointment.amount}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded bg-gray-50 p-3">
            <p className="text-sm font-semibold text-gray-600">Reason for visit</p>
            <p className="mt-2 text-sm text-gray-700 whitespace-pre-wrap">{visitReason}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
