import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-awesome-reveal';
import './Cards.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MostSellingPackage = () => {
    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ];

    const [loading, setLoading] = useState(true);
    const [sellingPackages, setSellingPackages] = useState([]);

    const token = 'ece9c3aefa07ede929f0cecbc605e5ee18a300a59ad1cf54a8b5daf835585799fb39b403d217787c9d546de1354d007642b2739617d314699b0efeda93938fe62e1c42ad4d1f9582af5219b508512b8c7b332afa8ec2a9a01035fd5ba12887bc068f764cc72829f1ebc3ef39e1ff7fc779629f641b850e3b1b42925a6ecf46a1';

    useEffect(() => {
        axios.get('https://meghalaya.onrender.com/api/tour-packages?populate=deep', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const locationData = response.data.data;
                setSellingPackages(locationData.slice(0, 8)); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false); 
            });
    }, []);

    return (
        <div className='w-[90%] mx-auto '>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Slide indicators={true} infinite responsive={responsiveSettings}>
                    {sellingPackages.map((subLocation, index) => (
                        <div key={index} className=" h-[700px] sm:h-[600px]  drop-shadow-xl rounded-2xl bg-white flex flex-col items-center mx-auto justify-between border-2 hover:shadow-xl shadow-lg sm:w-[400px] w-full">
                            <div>
                                <img
                                    loading='lazy'
                                    src={subLocation.attributes.image.data[0].attributes.url}
                                    alt={subLocation.attributes.title}
                                    className='w-full h-[250px] rounded-2xl'
                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                                <section className='flex flex-col justify-between text-center px-6 py-4'>
                                    <h1 className='text-[18px] text-black font-black'>{subLocation.attributes.title}</h1>
                                    <p className='text-gray-600 pt-5'>{subLocation.attributes.description.length > 100 ?
                                        `${subLocation.attributes.description.substring(0, 300)}...` :
                                        subLocation.attributes.description
                                    }</p>
                                </section>
                            </div>
                            <Link to={`/tour-package/${encodeURIComponent(subLocation.attributes.packageName)}`} className='mt-auto'>
                                <button className="bg-green-900 text-white font-bold py-2 px-4 mb-5 rounded">
                                    Explore Package Details
                                </button>
                            </Link>
                        </div>
                    ))}
                </Slide>
            )}
        </div>
    );
};

export default MostSellingPackage;
