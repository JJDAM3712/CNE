/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import { v } from "../css/Variables";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import {
  AiOutlineMenuFold,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  PiUsersFourFill,
  PiBankBold,
  PiCalendarFill,
  PiUsersFill,
} from "react-icons/pi";
import {
  MdSupervisedUserCircle,
  MdInventory,
  MdLogout,
  MdCategory,
} from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";

// #region Sidebar
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <div className="Logocontent">
        <div className="imgcontent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2657.524"
            height="1767.618"
            viewBox="0 0 2491.428 1657.142"
          >
            <path
              d="M1417.679 1377.447c-2.998-.587-8.06-2.746-11.25-4.796-7.062-4.54-45.888-43.633-150.695-151.727-43.86-45.236-80.23-82.08-80.823-81.875-.593.204-26.83 24.886-58.305 54.848-99.348 94.572-150.375 142.47-159.496 149.717-5.586 4.438-16.04 7.005-23.724 5.826-2.891-.443-8.913-2.535-13.381-4.649-7.104-3.36-12.217-7.944-40.68-36.481-26.573-26.643-143.885-147.696-175.438-181.033l-7.944-8.393-12.193 11.518c-6.706 6.336-39.683 38.264-73.281 70.953-120.683 117.413-135.441 131.128-145.055 134.807-14.305 5.474-24.849 2.75-41.66-10.764-14.793-11.893-93.35-92.038-201.941-206.023-43.395-45.55-55.276-58.748-57.522-63.897-1.324-3.037-2.124-8.312-2.172-14.324-.111-14.092 3.3-20.19 20.79-37.173 45.618-44.294 354.782-339.564 355.997-339.998.8-.285.878 11.92.225 35-1.508 53.347-1.048 213.294.678 235.438 3.44 44.163 12.32 69.418 30.769 87.5 16.275 15.952 36.381 24.889 66.36 29.497 5.434.835 60.208 1.717 146.115 2.355l137.423 1.02 53.558-52.686c29.458-28.977 54.3-52.852 55.204-53.054 2.587-.58 3.248 11.98 3.258 61.93l.009 45.313h126.457l-.917-196.804-.917-196.804 3.514-.882c6.162-1.546 144.818.734 146.003 2.401.572.805.713 97.933.313 215.839l-.727 214.375 68.717-69.375 68.717-69.375.045 49.89.045 49.89 165.123-.884c113.624-.608 164.987-.48 164.688.41-.445 1.32-11.091 11.525-144.22 138.233-146.857 139.772-190.054 180.262-194.966 182.744-4.023 2.033-10.838 2.642-16.7 1.493zm-737.674-349.986c-39.546-.994-49.992-2.726-66.875-11.087-11.986-5.935-20.651-13.31-29.219-24.867-8.706-11.744-13.452-22.518-15.785-35.836-2.47-14.1-4.26-109.09-4.38-232.5l-.083-85 42.858-42.253 42.859-42.252 134.602.397c74.031.218 135.015.809 135.52 1.313 1.126 1.127-6.972 9.737-49.36 52.482l-33.157 33.438H653.39l.8 44.062c.44 24.235 1.096 83.438 1.458 131.563.363 48.125.986 94.953 1.386 104.062l.726 16.563h110.916c130.267 0 231.55 1.207 231.035 2.753-.2.602-20.59 20.76-45.311 44.795l-44.946 43.702-97.538-.235c-53.645-.13-113.006-.624-131.912-1.1zm654.847-83.978c-.084-46.921-.506-130.03-.937-184.687-.78-98.602-.806-99.414-3.476-104.375-3.378-6.276-7.299-9.965-13.224-12.44-5.37-2.244-33.968-2.49-128.251-1.106l-56.451.828-.317 192.61-.316 192.608-37.188.331-37.187.331V553.691l147.812.439c136.212.405 148.543.613 157.116 2.654 34.39 8.188 53.637 27.842 60.802 62.087 1.678 8.018 2.042 30.735 2.64 164.76l.695 155.461-44.839 44.852c-24.66 24.669-45.263 44.852-45.782 44.852-.52 0-1.013-38.39-1.097-85.312zm133.677 81.25c-.22-1.546-.119-87.337.226-190.644l.625-187.833 52.269-46.23 52.27-46.23h124.918c74.852 0 124.918.46 124.918 1.146 0 .63-19.547 20.314-43.438 43.743l-43.437 42.598-94.688.006-94.687.006v45.43c0 24.987-.373 51.515-.828 58.95l-.827 13.52 125.409-.513c90.005-.368 125.538-.127 125.866.854.251.75-15.548 17.96-35.11 38.242l-35.566 36.877-88.517.906c-48.684.499-88.587 1.008-88.674 1.132-.086.125-.519 22.586-.962 49.914l-.805 49.688h174.486c139.025 0 174.383.317 173.98 1.562-.277.86-21.558 21.356-47.291 45.547l-46.786 43.985-166.476.078-166.476.078-.399-2.813zM922.505 910.351c-18.22-.21-79.532-.786-136.25-1.28l-103.125-.9-.915-8.75c-.503-4.813-1.065-59.375-1.25-121.25l-.335-112.5 83.57-.022 83.569-.021 63.544-67.479 63.543-67.478-46.488-.763c-25.569-.42-70.162-.841-99.096-.937-73.05-.243-146.767-1.643-146.767-2.789 0-1.212 299.486-289.417 319.286-307.259 13.04-11.75 16.506-13.245 30.714-13.245 10.086 0 12.71.445 17.423 2.955 6.715 3.576 7.009 3.871 125.704 126.437 52.251 53.956 95.564 98.224 96.25 98.375 1.204.265 133.03-122.347 188.165-175.01 26.994-25.785 39.84-36.929 46.833-40.624 2.33-1.231 7.062-2.012 12.5-2.06 7.414-.068 9.704.464 15 3.486 4.045 2.309 21.458 18.843 49.375 46.882 45.922 46.127 133.63 135.712 163.981 167.492l18.327 19.19 97.908-93.016c53.85-51.158 102.598-97.314 108.329-102.567 14.1-12.927 19.167-15.297 32.705-15.297 18.303 0 21.359 2.388 70.846 55.378 19.068 20.417 41.168 43.872 49.11 52.122 56.94 59.138 130.986 135.367 145.706 150 21.421 21.295 24.763 26.906 24.613 41.335-.142 13.68-3.846 20.9-17.527 34.163-11.784 11.424-149.595 143.982-272.748 262.353l-76.875 73.89-178.125-.246-178.125-.245v-50l85.032-.321 85.033-.321 54.655-62.377c30.06-34.307 54.655-62.569 54.655-62.804 0-.235-62.438-.23-138.75.01l-138.75.438V667.947l32.812-.823c18.047-.452 57.087-.824 86.755-.825l53.943-.002 68.176-68.438c64.121-64.368 67.975-68.484 64.807-69.227-1.853-.434-73.475-.856-159.161-.938l-155.794-.147-56.286 50.12c-30.958 27.567-56.757 50.085-57.332 50.04-.575-.045-1.672-4.808-2.437-10.586-3.288-24.81-11.074-41.438-26.724-57.074-13.916-13.904-25.242-19.946-49.384-26.345-9.044-2.397-14.96-2.748-61.875-3.666-28.532-.559-102.574-1.372-164.539-1.807l-112.663-.792-.985 63.492c-.542 34.921-1.031 121.149-1.087 191.618l-.101 128.124-38.125.03c-20.97.016-53.032-.14-71.25-.35z"
              fill="#fdf000"
            />
            <path
              d="M1417.679 1377.447c-2.998-.587-8.06-2.746-11.25-4.796-7.062-4.54-45.888-43.633-150.695-151.727-43.86-45.236-80.23-82.08-80.823-81.875-.593.204-26.83 24.886-58.305 54.848-99.348 94.572-150.375 142.47-159.496 149.717-5.586 4.438-16.04 7.005-23.724 5.826-2.891-.443-8.913-2.535-13.381-4.649-7.104-3.36-12.217-7.944-40.68-36.481-29.643-29.72-124.797-127.962-195.757-202.107-35.848-37.458-40.966-44.826-35.163-50.63 2.016-2.015 10.603-2.108 137.13-1.484l134.978.667 53.54-52.668c29.447-28.967 54.28-52.833 55.185-53.035 2.587-.58 3.248 11.98 3.258 61.93l.009 45.313h126.457l-.917-196.804-.917-196.804 3.514-.882c6.162-1.546 144.818.734 146.003 2.401.572.805.713 97.933.313 215.839l-.727 214.375 68.717-69.375 68.717-69.375.045 49.89.045 49.89 165.123-.884c113.624-.608 164.987-.48 164.688.41-.445 1.32-11.091 11.525-144.22 138.233-146.857 139.772-190.054 180.262-194.966 182.744-4.023 2.032-10.838 2.642-16.7 1.493zm-737.674-349.986c-39.546-.994-49.992-2.726-66.875-11.087-11.986-5.935-20.651-13.31-29.219-24.867-8.706-11.744-13.452-22.518-15.785-35.836-2.47-14.1-4.26-109.09-4.38-232.5l-.083-85 42.858-42.253 42.859-42.252 134.602.397c74.031.218 135.015.809 135.52 1.313 1.126 1.127-6.972 9.737-49.36 52.482l-33.157 33.438H653.39l.8 44.062c.44 24.235 1.096 83.438 1.458 131.563.363 48.125.986 94.953 1.386 104.062l.726 16.563h110.916c130.267 0 231.55 1.207 231.035 2.753-.2.602-20.59 20.76-45.311 44.795l-44.946 43.702-97.538-.235c-53.645-.13-113.006-.624-131.912-1.1zm654.847-83.978c-.084-46.921-.506-130.03-.937-184.687-.78-98.602-.806-99.414-3.476-104.375-3.378-6.276-7.299-9.965-13.224-12.44-5.37-2.244-33.968-2.49-128.251-1.106l-56.451.828-.317 192.61-.316 192.608-37.188.331-37.187.331V553.691l147.812.439c136.212.405 148.543.613 157.116 2.654 34.39 8.188 53.637 27.842 60.802 62.087 1.678 8.018 2.042 30.735 2.64 164.76l.695 155.461-44.839 44.852c-24.66 24.669-45.263 44.852-45.782 44.852-.52 0-1.013-38.39-1.097-85.312zm133.677 81.25c-.22-1.546-.119-87.337.226-190.644l.625-187.833 52.269-46.23 52.27-46.23h124.918c74.852 0 124.918.46 124.918 1.146 0 .63-19.547 20.314-43.438 43.743l-43.437 42.598-94.688.006-94.687.006v45.43c0 24.987-.373 51.515-.828 58.95l-.827 13.52 125.409-.513c90.005-.368 125.538-.127 125.866.854.251.75-15.548 17.96-35.11 38.242l-35.566 36.877-88.517.906c-48.684.499-88.587 1.008-88.674 1.132-.086.125-.519 22.586-.962 49.914l-.805 49.688h174.486c139.025 0 174.383.317 173.98 1.562-.277.86-21.558 21.356-47.291 45.547l-46.786 43.985-166.476.078-166.476.078-.399-2.813zM869.522 909.93c-47.496-.537-86.61-1.475-87.226-2.092-1.24-1.24 245.503-237.166 248.04-237.166 1.214 0 1.544 25.608 1.544 120v120l-38.125.115c-20.97.063-76.874-.322-124.233-.857zm702.29-.234c-.338-.88-.461-12.271-.274-25.313l.342-23.711 85.032-.321 85.033-.321 54.655-62.377c30.06-34.307 54.655-62.57 54.655-62.804 0-.235-62.438-.23-138.75.01l-138.75.438V667.947l32.812-.823c18.047-.453 57.087-.824 86.755-.825l53.943-.002 68.176-68.438c64.121-64.368 67.975-68.484 64.807-69.227-1.853-.434-73.475-.856-159.161-.938l-155.794-.148-56.501 50.313c-31.076 27.672-56.876 50.19-57.332 50.04-.457-.15-1.457-5-2.222-10.778-3.288-24.81-11.074-41.438-26.724-57.075-13.91-13.897-25.192-19.918-49.384-26.354-8.902-2.368-15.082-2.774-56.25-3.694-25.438-.568-68.047-1.07-94.688-1.117-28.135-.05-48.437-.56-48.437-1.22 0-.624 15.89-15.978 35.312-34.118 19.422-18.14 74.688-69.756 122.813-114.7 48.125-44.945 102.687-96.194 121.25-113.887 33.383-31.82 46.465-43.295 53.75-47.144 2.33-1.232 7.062-2.012 12.5-2.061 7.414-.067 9.704.465 15 3.487 4.045 2.308 21.458 18.842 49.375 46.882 45.922 46.126 133.63 135.711 163.981 167.491l18.327 19.19 97.908-93.015c53.85-51.159 102.598-97.314 108.329-102.568 14.1-12.927 19.167-15.297 32.705-15.297 18.303 0 21.359 2.389 70.846 55.378 19.068 20.418 41.168 43.872 49.11 52.122 56.94 59.139 130.986 135.368 145.706 150 21.421 21.295 24.763 26.907 24.613 41.335-.142 13.68-3.846 20.901-17.527 34.164-11.938 11.573-152.161 146.45-272.748 262.35l-76.875 73.886-177.852.07c-143.46.057-177.97-.24-178.466-1.53z"
              fill="#ea1923"
            />
            <path
              d="M928.666 1348.337c-11.142-3.004-17.735-8.333-48.749-39.4-61.379-61.486-222.57-229.412-228.541-238.09-5.091-7.4-6.064-12.18-3.086-15.158 2.168-2.168 8.082-2.237 137.245-1.6l134.978.667 53.54-52.668c29.447-28.967 54.28-52.833 55.185-53.035 2.587-.58 3.248 11.98 3.258 61.93l.009 45.313h126.457l-.917-196.804-.917-196.804 3.514-.882c6.17-1.548 144.833.734 145.893 2.401 1.078 1.695.977 205.195-.144 290.797l-.761 58.083-63.75 60.984c-35.063 33.541-67.688 64.838-72.5 69.548-20.657 20.218-146.406 139.377-183.765 174.135-29.763 27.69-31.83 29.31-39.479 30.95-7.683 1.648-10.19 1.595-17.47-.367zM680.005 1027.46c-39.546-.994-49.992-2.726-66.875-11.087-11.986-5.935-20.651-13.31-29.219-24.867-8.706-11.744-13.452-22.518-15.785-35.836-2.47-14.1-4.26-109.09-4.38-232.5l-.083-85 42.858-42.253 42.859-42.252 134.602.397c74.031.218 135.015.809 135.52 1.313 1.126 1.127-6.972 9.737-49.36 52.482l-33.157 33.438H653.39l.8 44.062c.44 24.235 1.096 83.438 1.458 131.563.363 48.125.986 94.953 1.386 104.062l.726 16.563h110.916c130.267 0 231.55 1.207 231.035 2.753-.2.602-20.59 20.76-45.311 44.795l-44.946 43.702-97.538-.235c-53.645-.13-113.006-.624-131.912-1.1zm654.847-83.978c-.084-46.921-.506-130.03-.937-184.687-.78-98.602-.806-99.414-3.476-104.375-3.378-6.276-7.299-9.965-13.224-12.44-5.37-2.244-33.968-2.49-128.251-1.106l-56.451.828-.317 192.61-.316 192.608-37.188.331-37.187.331V553.691l147.812.439c136.212.405 148.543.613 157.116 2.654 34.39 8.188 53.637 27.842 60.802 62.087 1.678 8.018 2.042 30.735 2.64 164.76l.695 155.461-44.839 44.852c-24.66 24.669-45.263 44.852-45.782 44.852-.52 0-1.013-38.39-1.097-85.312zm133.677 81.25c-.22-1.546-.119-87.337.226-190.644l.625-187.833 52.269-46.23 52.27-46.23h124.918c74.852 0 124.918.46 124.918 1.146 0 .63-19.547 20.314-43.438 43.743l-43.437 42.598-94.688.006-94.687.006v45.43c0 24.987-.373 51.515-.828 58.95l-.827 13.52 125.409-.513c90.005-.368 125.538-.127 125.866.854.251.75-15.548 17.96-35.11 38.242l-35.566 36.877-88.517.906c-48.684.499-88.587 1.008-88.674 1.132-.086.125-.519 22.586-.962 49.914l-.805 49.688h174.486c139.025 0 174.383.317 173.98 1.562-.277.86-21.558 21.356-47.291 45.547l-46.786 43.985-166.476.078-166.476.078-.399-2.813zM869.522 909.93c-47.36-.535-86.6-1.466-87.203-2.068-1.206-1.206 245.588-237.19 248.055-237.19 1.164 0 1.506 27.26 1.506 120v120l-38.125.115c-20.97.063-76.874-.322-124.233-.857zm704.233-208.432v-33.55l32.812-.823c44.29-1.11 58.16-1.04 58.99.303.58.94-16.651 17.233-65.811 62.233l-5.884 5.386h-20.107v-33.55zM1450.92 627.96c-.335-.572-1.019-4.978-1.52-9.79-2.439-23.431-11.27-42.52-26.887-58.125-13.91-13.897-25.192-19.918-49.384-26.354-8.902-2.369-15.082-2.774-56.25-3.694-25.438-.568-68.047-1.071-94.688-1.118-27.697-.048-48.437-.564-48.437-1.206 0-.616 24.046-23.57 53.437-51.008 143.96-134.393 194.954-182.176 225.938-211.71 33.382-31.82 46.465-43.295 53.75-47.145 2.33-1.231 7.062-2.012 12.5-2.06 7.414-.068 9.704.464 15 3.486 14.657 8.363 264.086 264.283 271.527 278.593 4.202 8.08 3.84 16.539-1.02 23.877l-3.868 5.839H1565.27l-53.57 47.652c-29.464 26.209-55.056 49.036-56.87 50.728-1.816 1.691-3.575 2.607-3.91 2.035z"
              fill="#005894"
            />
            <path
              className="letraLogo"
              d="M1173.755 1136.257c0-.666.843-1.211 1.875-1.211 1.03 0 1.875.221 1.875.491s-.844.815-1.875 1.211c-1.032.396-1.875.175-1.875-.491zm17.5-14.336c1.614-1.719 3.217-3.125 3.56-3.125.344 0-.696 1.406-2.31 3.125-1.615 1.719-3.217 3.125-3.561 3.125-.344 0 .696-1.406 2.31-3.125zm-501.922-9.688l-6.203-6.562 6.562 6.203c6.098 5.764 7.136 6.922 6.203 6.922-.198 0-3.15-2.953-6.562-6.563zm530.047-17.187c1.244-1.375 2.543-2.5 2.887-2.5.344 0-.393 1.125-1.637 2.5-1.245 1.375-2.544 2.5-2.888 2.5-.344 0 .393-1.125 1.638-2.5zm-556.31-10.313l-4.94-5.312 5.312 4.941c4.94 4.595 5.887 5.684 4.941 5.684-.204 0-2.595-2.39-5.312-5.313zm-16.618-24.687c0-1.719.284-2.422.63-1.563.347.86.347 2.266 0 3.125-.346.86-.63.157-.63-1.562zm86.678-32.578c-91.447-.858-91.748-.879-111.77-7.842-12.22-4.25-19.734-9.383-30.521-20.85-10.724-11.4-18.79-25.768-21.57-38.424-3.085-14.051-4.155-63.988-4.211-196.563l-.053-125.632 42.37-42.357 42.372-42.357 134.816.922c74.15.507 135.035 1.133 135.302 1.39.267.259-17.877 19.256-40.319 42.217l-40.804 41.748-92.181.92c-50.7.505-92.391 1.116-92.647 1.357-.416.391 2.395 294.602 2.82 295.146.095.122 77.37.63 171.722 1.131 94.352.5 171.549 1.019 171.549 1.153 0 .28-42.76 42.42-71.377 70.341l-19.502 19.028-45.498-.265c-25.024-.146-83.748-.624-130.498-1.063zm602.757.543c-.485-.485-.94-63.929-1.01-140.986-.07-77.057-.491-160.118-.937-184.579l-.81-44.475-3.757-6.15c-2.745-4.494-5.437-6.991-10-9.275l-6.243-3.125-60.625.469c-33.344.258-74.125.82-90.625 1.25l-30 .781-.317 192.812-.316 192.813h-73.749l.316-236.563.316-236.562 124.375-.344c167.052-.463 182.227.376 202.892 11.213 11.528 6.046 24.43 19.438 30.094 31.238 9.288 19.352 8.747 8.437 9.176 185.393l.385 158.75-44.142 44.111c-24.278 24.261-44.538 43.715-45.023 43.23zm132.937-190.778l.068-190.312 51.744-45.625 51.743-45.625 18.5-.684c34.202-1.263 233.124-1.308 232.676-.052-.234.656-19.869 20.29-43.633 43.632l-43.208 42.44-94.399-.666-94.399-.666-.829 44.248c-.456 24.336-.83 51.139-.83 59.56v15.313h125.728c73.262 0 125.556.466 125.313 1.116-1.06 2.842-70.712 74.041-72.917 74.538-1.375.31-41.125.71-88.334.892-47.209.18-86.153.648-86.542 1.038-.39.39-.858 23.09-1.04 50.446l-.334 49.739 173.323-.202c105.095-.122 173.603.254 174.037.955.393.636-20.78 21.198-47.053 45.692l-47.768 44.536H1468.755l.068-190.313zm-678.82 60.938c3.735-3.781 7.071-6.875 7.415-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm28.126-26.875c3.385-3.438 6.437-6.25 6.78-6.25.344 0-2.145 2.812-5.53 6.25-3.386 3.437-6.438 6.25-6.781 6.25-.344 0 2.145-2.813 5.53-6.25zm26.875-25.625c3.734-3.781 7.07-6.875 7.414-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm26.25-25c3.734-3.781 7.07-6.875 7.414-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm26.25-25c4.429-4.469 8.334-8.125 8.677-8.125.344 0-2.998 3.656-7.427 8.125-4.43 4.469-8.334 8.125-8.678 8.125-.344 0 2.999-3.656 7.428-8.125zm27.5-26.25c3.734-3.781 7.07-6.875 7.414-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm27.5-26.25c3.734-3.781 7.07-6.875 7.414-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm641.354-9.7c.286-.18 1.927-1.446 3.646-2.813l3.125-2.487-2.382 2.812c-1.31 1.547-2.95 2.813-3.646 2.813-.695 0-1.03-.147-.743-.326zm16.77-14.675c2.686-2.75 5.164-5 5.508-5 .344 0-1.572 2.25-4.257 5-2.686 2.75-5.164 5-5.508 5-.344 0 1.572-2.25 4.258-5zm-630.677-1.563c3.065-3.265 5.737-5.937 5.938-5.937.938 0-.054 1.122-5.573 6.302l-5.937 5.573 5.572-5.938zm645.053-11.562c2.332-2.406 4.521-4.375 4.865-4.375.344 0-1.283 1.969-3.615 4.375-2.333 2.406-4.522 4.375-4.866 4.375-.344 0 1.283-1.969 3.616-4.375zm-618.75-13.75c3.734-3.781 7.07-6.875 7.414-6.875.344 0-2.43 3.094-6.164 6.875-3.735 3.781-7.071 6.875-7.415 6.875-.344 0 2.43-3.094 6.165-6.875zm635-1.25c2.332-2.406 4.521-4.375 4.865-4.375.344 0-1.283 1.969-3.615 4.375-2.333 2.406-4.522 4.375-4.866 4.375-.344 0 1.283-1.969 3.616-4.375zm15-13.75c2.332-2.406 4.521-4.375 4.865-4.375.344 0-1.283 1.969-3.615 4.375-2.333 2.406-4.522 4.375-4.866 4.375-.344 0 1.283-1.969 3.616-4.375zm146.25-153.597c0-.26.984-1.244 2.187-2.187 1.983-1.555 2.027-1.511.472.471-1.633 2.083-2.66 2.745-2.66 1.716zm-619.375-5.778c2.685-2.75 5.163-5 5.507-5 .344 0-1.572 2.25-4.257 5-2.686 2.75-5.164 5-5.508 5-.344 0 1.572-2.25 4.258-5zm18.75-17.5c2.685-2.75 5.163-5 5.507-5 .344 0-1.572 2.25-4.257 5-2.686 2.75-5.164 5-5.508 5-.344 0 1.572-2.25 4.258-5zm597.421-10.313l-3.671-4.062 4.062 3.671c3.787 3.423 4.637 4.454 3.672 4.454-.216 0-2.044-1.828-4.063-4.063zm-578.671-7.187c2.685-2.75 5.163-5 5.507-5 .344 0-1.572 2.25-4.257 5-2.686 2.75-5.164 5-5.508 5-.344 0 1.572-2.25 4.258-5zm566.875-5.625c-3.037-3.094-5.24-5.625-4.896-5.625.344 0 3.11 2.531 6.146 5.625s5.239 5.625 4.895 5.625c-.344 0-3.11-2.531-6.145-5.625zm-548.125-11.875c2.685-2.75 5.163-5 5.507-5 .344 0-1.572 2.25-4.257 5-2.686 2.75-5.164 5-5.508 5-.344 0 1.572-2.25 4.258-5zm531.19-6.563l-4.94-5.312 5.312 4.941c2.922 2.718 5.313 5.108 5.313 5.313 0 .945-1.089 0-5.684-4.942zm-513.065-10.312c2.332-2.406 4.521-4.375 4.865-4.375.344 0-1.283 1.969-3.615 4.375-2.333 2.406-4.522 4.375-4.866 4.375-.344 0 1.283-1.969 3.616-4.375z"
              fill="#101213"
            />
          </svg>
        </div>
      </div>
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineMenuFold />
      </button>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondarylinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Modo Oscuro</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" istheme={theme}>
                  <input
                    istheme={theme}
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span istheme={theme} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
// #endregion
// #region LINKS
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Personal",
    icon: <PiUsersFourFill />,
    to: "/personal",
  },
  {
    label: "Asistencias",
    icon: <PiCalendarFill />,
    to: "/asistencias",
  },
  {
    label: "Visitas",
    icon: <MdSupervisedUserCircle />,
    to: "/visitas",
  },
  {
    label: "Inventario",
    icon: <MdInventory />,
    to: "/inventario",
  },
  {
    label: "departamentos",
    icon: <PiBankBold />,
    to: "/departamentos",
  },
  {
    label: "Cargos",
    icon: <RiOrganizationChart />,
    to: "/cargos",
  },
  {
    label: "Categorias",
    icon: <MdCategory />,
    to: "/categoria",
  },
  {
    label: "Usuarios",
    icon: <PiUsersFill />,
    to: "/usuario",
  },
];
const secondarylinksArray = [
  {
    label: "Configuraciónes",
    icon: <AiOutlineSetting />,
    to: "/null",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];
//#region STYLED COMPONENTS
const Container = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  position: sticky;
  padding-top: 20px;
  .Sidebarbutton {
    position: absolute;
    top: 0px;
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
    svg {
      color: ${(props) => props.theme.text};
    }
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    width: ${({ isOpen }) => (isOpen ? `100%;` : `80%;`)};
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    .imgcontent {
      display: flex;
      svg {
        max-width: 100%;
        height: auto;
        .letraLogo {
          fill: ${(props) => props.theme.text};
        }
      }
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(1.3)`)};
    }
    h2 {
      display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
    }
  }
  .LinkContainer {
    margin: 8px 0;

    padding: 0 15%;
    :hover {
      background: ${(props) => props.theme.bg3};
    }
    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${(props) => props.theme.text};
      height: 50px;
      .Linkicon {
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        // ESTILOS DE LOS ICONOS
        svg {
          font-size: 25px;
        }
      }
      &.active {
        .Linkicon {
          svg {
            color: ${(props) => props.theme.bg4};
          }
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 1rem;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }
    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo {
          font-size: 1.78rem;
          .switch {
            position: relative;
            display: inline-block;
            width: 4rem;
            height: 2rem;
            .theme-swither {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before {
                left: 4px;
                content: "🌑";
                transform: translateX(26px);
              }
            }
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({ themeUse }) =>
                themeUse === "light" ? v.lightcheckbox : v.darkcheckbox};

              transition: 0.4s;
              &::before {
                position: absolute;
                content: "☀️";
                height: 0px;
                width: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round {
                border-radius: 34px;

                &::before {
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg3};
  margin: ${v.smSpacing} 0;
`;
// #endregion
