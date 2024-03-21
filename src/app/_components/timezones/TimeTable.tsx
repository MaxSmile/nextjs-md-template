"use client";
import { useState } from "react";
import TimezoneSelect, { ITimezone, ITimezoneOption } from 'react-timezone-select';
import TimeCell from "./TimeCell";

export default function TimeTable() {

    const [selectedTimezones, setSelectedTimezones] = useState<ITimezone[]>([]);
    const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    )
    const hoursTitles = Array.from({ length: 24 }, (_, i) => i);

    const addTimezone = () => {
        if (selectedTimezone) {
            setSelectedTimezones(prev => [...prev, selectedTimezone]);
            setSelectedTimezone(''); // Reset the selection
        }
    };

    const removeTimezone = (index: number) => {
        setSelectedTimezones(current => current.filter((_, i) => i !== index));
    };

    const MinusIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    )

    return (
        <div className="max-w-6xl mx-auto mb-8 border-b border-gray-200 py-4">
            <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
            />
            <div className="mt-4 flex gap-4 w-fit justify-center mx-auto">
            <button onClick={addTimezone} className="btn-132 mt-4">Add Timezone</button>
            <button onClick={() => setSelectedTimezones([])} className="btn-132 mt-4">Clear All</button>
            </div>
            
            <table className="table-auto w-full mt-4">
                <thead className="border-b border-gray-800">
                    <tr>
                        <th>Time Zone</th>
                        <th colSpan={hoursTitles.length}>Hours</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // Map over selectedTimezones
                        selectedTimezones.map((timezone, tzIndex) => {
                            if (typeof timezone === 'object') {
                                return (
                                    <tr key={tzIndex}>
                                        <td className="font-bold text-gray-700 text-center text-sm border-r border-gray-800"
                                            title={timezone.label}
                                        >{timezone.abbrev} - {(+(timezone.offset || 0) < 0) ? "GMT" + timezone.offset : "GMT+" + timezone.offset}</td>
                                        {hoursTitles.map(hour => (
                                            <TimeCell key={`${tzIndex}-${hour}`} hour={hour} timezone={timezone} />
                                        ))}
                                        <td className="border-l border-gray-800 text-center">
                                            <button onClick={() => removeTimezone(tzIndex)}
                                                className="text-primary"
                                            ><MinusIcon /></button>
                                        </td>
                                    </tr>
                                );
                            } else {
                                // This branch wouldn't be executed if we correctly ensure timezone is always an ITimezoneOption
                                return (
                                    <tr key={`invalid-${tzIndex}`}>
                                        <td colSpan={hoursTitles.length + 2}>{timezone} is invalid</td>
                                    </tr>
                                );
                            }
                        })
                    }
                </tbody>

            </table>
        </div>
    );
}
