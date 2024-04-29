import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const AddSpot = () => {
  const { user,mainUrl } = useContext(AuthContext);

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const SpotName = form.SpotName.value;
    const SpotImage = form.SpotImage.value;
    const averageCost = parseInt(form.averageCost.value);
    const travelTime = parseInt(form.travelTime.value);
    const totaVisitorsPerYear = parseInt(form.totaVisitorsPerYear.value);
    const Location = form.Location.value;
    const country = form.country.value;
    const seasonality = form.seasonality.value;
    const shortDescription = form.shortDescription.value;
    const adderName = user.displayName;
    const adderEmail = user.email;
    const adderPhoto = user?.photoURL;

    const info = {
      SpotName,
      SpotImage,
      averageCost,
      travelTime,
      Location,
      totaVisitorsPerYear,
      seasonality,
      country,
      shortDescription,
      adderName,
      adderEmail,
      adderPhoto,
    };
    fetch(`${mainUrl}/addSpot`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Spot added Successfully");
        }
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tour|AddSpot</title>
      </Helmet>
      <div className="max-w-7xl mx-auto lg:px-0 md:px-5 px-2 mt-10 mb-24">
        <form
          onSubmit={handleAdd}
          className="grid md:grid-cols-2 grid-cols-1 gap-7"
        >
          <label htmlFor="SpotName">
            {" "}
            Spot Name
            <input
              type="text"
              name="SpotName"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Spot Name"
              required
            />
          </label>

          <label htmlFor="SpotImage">
            Spot Image
            <input
              type="text"
              name="SpotImage"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Spot Image URL"
              required
            />
          </label>

          <label htmlFor="averageCost">
            Average Cost
            <input
              type="number"
              name="averageCost"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Average Cost"
              required
            />
          </label>
          <label htmlFor="traveTime">
            Travel Time
            <input
              type="time"
              name="travelTime"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Travel Time"
              required
            />
          </label>
          <label htmlFor="totaVisitorsPerYear">
            Tota Visitors Per Year
            <input
              type="number"
              name="totaVisitorsPerYear"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Tota Visitors Per Year"
              required
            />
          </label>

          <label htmlFor="Location">
            Location
            <input
              type="text"
              name="Location"
              className="w-full md:py-5 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Location"
              required
            />
          </label>

          <label htmlFor="country">
            Country Name
            <select
              name="country"
              id=""
              className="w-full md:py-5 py-2 md:text-base border text-sm rounded-lg px-5 mt-3"
              required
            >
              <option selected disabled>
                Select Country
              </option>
              <option value="France">France</option>
              <option value="England">England</option>
              <option value="Italy">Italy</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Spain">Spain</option>
            </select>
          </label>
          <label htmlFor="seasonality">
            Seasonality
            <select
              name="seasonality"
              id=""
              className="w-full md:py-5 py-2 md:text-base border text-sm rounded-lg px-5 mt-3"
              required
            >
              <option selected disabled>
                Select season
              </option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
            </select>
          </label>

          <label htmlFor="shortDescription">
            Short Description
            <textarea
              name="shortDescription"
              className="w-full md:py-8 py-2 md:text-base border text-sm mt-3 rounded-lg px-5"
              placeholder="Short Description"
              required
              rows={5}
            ></textarea>
          </label>

          <input
            type="submit"
            className="w-full block md:text-lg text-base font-bold bg-orange-600
         text-white rounded-lg cursor-pointer"
            value="Add Spot"
          />
        </form>
      </div>
    </>
  );
};

export default AddSpot;
