export const fromIsoDataShort = (isoDate) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return formattedDate;
}

export const fromIsoDataLong = (isoDate) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', { weekday: "long", year: 'numeric', month: 'long', day: 'numeric' });

    return formattedDate;
}