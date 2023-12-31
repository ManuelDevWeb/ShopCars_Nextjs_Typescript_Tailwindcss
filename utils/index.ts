import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps){
  const {fuel,limit,manufacturer,model,year}=filters;

    const headers = {
        "X-RapidAPI-Key": "9c3bc9c608msh84ead377864ba43p1ba945jsn0e4b2edc1627",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };

    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
      {
        headers,
      }
    );

    const result=await response.json();

    return result;
}

export const calculateCarRent=(city_mpg: number, year:number)=>{
  // Base rental price per day in dollars
  const basePricePerDay=50;
  // Additional rate per mile driven
  const mileageFactor=0.1;
  // Additional rate per year of car age
  const ageFactor=0.05;

  // Calculate additional rate base on mileage and age
  const mileageRate=city_mpg*mileageFactor;
  const ageRate=(new Date().getFullYear()-year)*ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay=basePricePerDay+mileageRate+ageRate;

  return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl=(car:CarProps, angle?:string)=>{
  // Create new url with query empty
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  // Add new parameters to query (key-value)
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(' ')[0]);
  url.searchParams.append("zoomType", 'fullscreen');
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`
}

export const updateSearchParams=(type:string, value:string)=>{
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}