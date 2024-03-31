import styles from "./siteFooter.module.css"
import langIcon from "../../assets/icons/Lang.svg"
import vkIcon from "../../assets/icons/VK.svg"
import telegramIcon from "../../assets/icons/Telegram.svg"
import whatsappIcon from "../../assets/icons/Whatsapp.svg"
import { Link } from "react-router-dom"

export const SiteFooter = () => (
	<div className={styles.container}>
		<div className={styles.footerInfoColumn}>
			<span className={styles.serviceTitle}>QPICK</span>
		</div>
		<div className={styles.footerInfoColumn}>
			<Link to={'/favorites'} className={styles.link + " " + styles.interactiveSpan}>
				Избранное
			</Link>
			<Link to={'/cart'} className={styles.link + " " + styles.interactiveSpan}>
				Корзина
			</Link>
			<Link to={'/contacts'} className={styles.link + " " + styles.interactiveSpan}>
				Контакты
			</Link>
		</div>
		<div className={styles.footerInfoColumn}>
			<Link to={'/serviceTerms'} className={styles.link + " " + styles.interactiveSpan}>
				Условия сервиса
			</Link>
			<div className={styles.langBlock}>
				<img className={styles.staticIcon} src={langIcon} alt={"lang"} aria-label="language icon" />
				<button className={styles.interactiveSpan + " " + styles.interactiveSpanActive}>Рус</button>
				<button className={styles.interactiveSpan}>Eng</button>
			</div>
		</div>
		<div className={styles.footerInfoColumn}>
			<div className={styles.langBlock}>
				{/* TODO: выделить внешнюю ссылку в отдельный компонент */}
				<a className={styles.iconBlock} href="https://vk.com/some-group/" target="_blank" rel="noreferrer">
					<img className={styles.staticIcon} src={vkIcon} alt={"vk"} aria-label="vk icon" />
				</a>
				<a className={styles.iconBlock} href="https://t.me/some-group/" target="_blank" rel="noreferrer">
					<img className={styles.staticIcon} src={telegramIcon} alt={"tg"} aria-label="tg icon" />
				</a>
				<a className={styles.iconBlock} href="https://whatsapp.com/some-group/" target="_blank" rel="noreferrer">
					<img className={styles.staticIcon} src={whatsappIcon} alt={"whatsapp"} aria-label="whatsapp icon" />
				</a>
			</div>
		</div>
	</div>
);