export const fromIsoData = (isoDate) => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return formattedDate;
}