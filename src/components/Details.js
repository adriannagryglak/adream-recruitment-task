import '../styles/Details.scss';

export default function Details({ sizes }) {
    return (
        <section className={sizes.isDesktop ? "details" : "details p-0 m-5"} id="details_section">
            <h1 className={sizes.isMedium ? 'details__title p-5' : "details__title"}>Lorem ipsum vs własne biuro</h1>
            <div className={sizes.isDesktop ? "details__container" : "details__container p-3 m-0"}></div>
        </section>
    );
}