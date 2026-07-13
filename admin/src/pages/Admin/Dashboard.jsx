import { useContext, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const {
    aToken,
    getDashData,
    cancelAppointment,
    dashData,
    doctors,
    getAllDoctors,
  } = useContext(AdminContext);

  const { slotDateFormat } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const currentDashData = dashData || {
    doctors: 0,
    appointments: 0,
    patients: 0,
    latestAppointments: [],
  };

  const refreshDashboard = useCallback(async () => {
    if (!aToken) return;
    setRefreshing(true);
    await Promise.all([getDashData(), getAllDoctors()]);
    setRefreshing(false);
  }, [aToken, getDashData, getAllDoctors]);

  useEffect(() => {
    if (!aToken) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const loadData = async () => {
      await Promise.all([getDashData(), getAllDoctors()]);
      setLoading(false);
    };
    loadData();
  }, [aToken, getDashData, getAllDoctors]);

  useEffect(() => {
    if (!aToken) return;
    const interval = setInterval(() => {
      refreshDashboard();
    }, 30000);
    return () => clearInterval(interval);
  }, [aToken, refreshDashboard]);

  const filteredDoctors = (doctors || []).filter((doctor) =>
    doctor.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAppointments = (currentDashData.latestAppointments || []).filter(
    (item) => {
      const name = `${item.userData?.name || ""} ${item.docData?.name || ""}`.toLowerCase();
      return name.includes(searchTerm.toLowerCase());
    }
  );

  const filteredPatients = Array.from(
    new Set(
      filteredAppointments
        .map((item) => item.userData?.name)
        .filter(Boolean)
    )
  );

  return (
    <div className="m-5">
      {loading && (
        <div className="p-6 bg-white rounded border text-gray-500">
          Loading dashboard...
        </div>
      )}
      {!loading && !dashData && (
        <div className="p-6 bg-white rounded border text-gray-500">
          No dashboard data available.
        </div>
      )}
      {!loading && dashData && (
        <>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
              <img className="w-14" src={assets.doctor_icon} alt="" />
              <div>
                <p className="text-xl font-semibold text-gray-600">
                  {currentDashData.doctors}
                </p>
                <p className="text-gray-400">Doctors</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
              <img className="w-14" src={assets.appointments_icon} alt="" />
              <div>
                <p className="text-xl font-semibold text-gray-600">
                  {currentDashData.appointments}
                </p>
                <p className="text-gray-400">Appointments</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
              <img className="w-14" src={assets.patients_icon} alt="" />
              <div>
                <p className="text-xl font-semibold text-gray-600">
                  {currentDashData.patients}
                </p>
                <p className="text-gray-400">Patients</p>
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 rounded border">
            <div className="px-4 py-4 border-b">
              <p className="font-semibold">Search bookings by name</p>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type a doctor or patient name"
                className="w-full mt-2 border rounded px-3 py-2 text-sm"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4 p-4">
              <div>
                <p className="text-sm font-semibold text-gray-700">Doctors</p>
                <div className="mt-2 space-y-1">
                  {filteredDoctors.length ? (
                    filteredDoctors.slice(0, 8).map((doctor) => (
                      <p key={doctor._id} className="text-sm text-gray-600">
                        {doctor.name}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">No matching doctors</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700">Appointments</p>
                <div className="mt-2 space-y-1">
                  {filteredAppointments.length ? (
                    filteredAppointments.slice(0, 8).map((item, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        {item.userData?.name || "Unknown patient"} • {item.docData?.name || "Unknown doctor"} • {slotDateFormat(item.slotDate)}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">No matching appointments</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700">Patients</p>
                <div className="mt-2 space-y-1">
                  {filteredPatients.length ? (
                    filteredPatients.slice(0, 8).map((patientName, index) => {
                      const patientAppointment = filteredAppointments.find(
                        (item) => item.userData?.name === patientName
                      );
                      const patientPhone = patientAppointment?.userData?.phone || "No phone provided";

                      return (
                        <Link
                          key={index}
                          to={patientAppointment ? `/appointment/${patientAppointment._id}` : "/all-appointments"}
                          className="block rounded border border-gray-100 p-2 text-sm text-gray-600 hover:text-blue-600 hover:border-blue-200"
                        >
                          <p className="font-medium text-gray-800">{patientName}</p>
                          <p className="text-xs text-gray-500">Phone: {patientPhone}</p>
                        </Link>
                      );
                    })
                  ) : (
                    <p className="text-sm text-gray-400">No matching patients</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 rounded border">
            <div className="flex items-center justify-between gap-2.5 px-4 py-4 rounded-t border-b">
              <div className="flex items-center gap-2.5">
                <img src={assets.list_icon} alt="" />
                <p className="font-semibold">Latest Bookings</p>
              </div>
              <button
                onClick={refreshDashboard}
                className="text-sm text-primary hover:underline"
                disabled={refreshing}
              >
                {refreshing ? "Refreshing..." : "Refresh"}
              </button>
            </div>

            <div className="pt-4">
              {(currentDashData.latestAppointments || []).filter((item) => !item.cancelled).length === 0 ? (
                <p className="px-6 pb-4 text-sm text-gray-400">No active bookings</p>
              ) : (
                (currentDashData.latestAppointments || [])
                  .filter((item) => !item.cancelled)
                  .map((item, index) => (
                    <div
                      className="flex items-center px-6 py-3 hover:bg-gray-100"
                      key={index}
                    >
                      <Link to={`/appointment/${item._id}`} className="flex items-center flex-1">
                        <img
                          className="rounded-full w-10"
                          src={item.docData?.image || assets.upload_area}
                          alt=""
                        />
                        <div className="flex-1 text-sm ml-3">
                          <p className="text-gray-800 font-medium">
                            {item.docData?.name || "Unknown doctor"}
                          </p>
                          <p className="text-gray-600">
                            {item.userData?.name || "Unknown patient"} • {slotDateFormat(item.slotDate)}
                          </p>
                        </div>
                      </Link>
                      {item.isCompleted ? (
                        <p className="text-green-500 text-xs font-medium">Completed</p>
                      ) : (
                        <img
                          onClick={(e) => {
                            e.preventDefault();
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
                  ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
