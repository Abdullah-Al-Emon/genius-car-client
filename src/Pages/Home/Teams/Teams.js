import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard';

const Teams = () =>
{
    const [teams, setTeams] = useState([]);
    useEffect(() =>
    {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div className='mb-20'>
            <div className='text-center '>
                <p className="text-2xl font-bold text-orange-600">Team</p>
                <h2 className="text-5xl font-semibold">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8'>
                {
                    teams.map(team => <TeamCard
                        key={team._id}
                        team={team}
                    ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Teams;