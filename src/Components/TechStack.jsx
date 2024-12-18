const TechStack = ({ globalBlur, isLight, splashStatus }) => {
  return (
    <div className={`${splashStatus ? "hidden" : "block"}`}>
      <div
        className={`${
          globalBlur
            ? "md:blur-none blur-md duration-500 ease-in-out"
            : "blur-none duration-500 ease-in-out "
        }mt-10 md:mt-20 pt-5 grid grid-cols-2 md:grid-cols-6 xl:px-80 lg:px-52 md:px-36 px-8`}
      >
        <div className="mb-10 col-span-full col-start-1 text-center md:text-start md:ps-16 md:me-9 text-3xl md:text-4xl">
          Tech-Stack
        </div>
        {/* react */}
        <div className="flex justify-center mt-2 md:mt-0 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos animate-spinSlow ease-in-out transition-transform"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 228"
          >
            <path
              fill={`${isLight ? "#6ca7da" : "#00D8FF"}`}
              d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"
            ></path>
          </svg>
        </div>
        {/* javascript */}
        <div className="flex justify-center mt-2 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:animate-bounce ease-in-out transition-transform"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill={`${isLight ? "#FFD966" : "yellow"}`}
              d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"
            />
          </svg>
        </div>
        {/* html5 */}
        <div className="flex justify-center mt-3 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:animate-rotateY"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 384 512"
          >
            <path
              fill="red"
              d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
            />
          </svg>
        </div>

        {/* css3 */}
        <div className="flex justify-center mt-3 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:-translate-y-1 ease-in-out transition-transform"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 384 512"
          >
            <path
              fill="#00D8FF"
              d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
            />
          </svg>
        </div>
        {/* bootstrap */}
        <div className="flex justify-center mt-3 md:mt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:animate-balloonPop"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 576 512"
          >
            <path
              fill="#7952b3"
              d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z"
            />
          </svg>
        </div>

        <div className="flex justify-center mt-3 md:mt-0">
          <svg
            viewBox="-3.2 -3.2 38.40 38.40"
            aria-hidden="true"
            role="img"
            className="hover:animate-wave -my-2"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
              style={{ fill: "#38bdf8" }}
            ></path>
          </svg>
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/vitejs.svg"
            alt="Vite Logo"
            width="70"
            height="70"
            class="animate-wave"
          />
        </div>
        {/* becond */}
        <div className="flex justify-center mt-3 md:mt-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:animate-wave"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 448 512"
          >
            <path
              fill="#3c873a"
              d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8c12.3-4.3 14.8-5.2 27.9-12.6c1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 5.1l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6c-10.7 0-19.1-2.4-27-7.3l-48.4-27.9c-7.6-4.4-12.4-12.6-12.4-21.3V149.3c0-8.8 4.7-17 12.4-21.3L207.6 21.5c7.5-4.3 17.4-4.3 24.8 0l184.7 106.7c7.6 4.4 12.4 12.6 12.4 21.3v213.1c0 8.8-4.7 17-12.4 21.3L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58c-57.4-7.6-63.2-11.5-63.2-24.9c0-11.1 4.9-25.9 47.4-25.9c37.9 0 51.9 8.2 57.7 33.8c.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7c1-1.1 1.6-2.5 1.4-4c-3.7-44.1-33-64.6-92.2-64.6c-52.7 0-84.1 22.2-84.1 59.5c0 40.4 31.3 51.6 81.8 56.6c60.5 5.9 65.2 14.8 65.2 26.7c0 20.6-16.6 29.4-55.5 29.4c-48.9 0-59.6-12.3-63.2-36.8c-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3c0 31.1 16.9 68.2 97.8 68.2c58.7-.1 92.4-23.2 92.4-63.7z"
            />
          </svg>
        </div>
        {/* TypeScript */}
        <div className="flex justify-center mt-3 md:mt-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="iconify iconify--logos hover:animate-balloonPop"
            width="80"
            height="80"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="#3178C6" />
            <path
              fill="#FFF"
              d="M45.5 128.4v10.8h33v88.1h18.6v-88h32.8v-11.3c0-6.3-.2-11.4-.4-11.4c-.2 0-20.9-.3-46-.3l-45.6-.2v11.3zm124.2-11.1c-7.5 1.9-13.2 6-17.5 12.5c-1.5 2.2-4.6 8-4.6 8.5c0 .2 11.6 8.5 25.8 18.5l25.9 18.1l-3.3 4.8c-4.5 6.7-10.6 9.6-20.4 9.7c-6.4.1-10.7-1.1-15.3-4.2c-2.3-1.5-6.1-5-8.1-7.6l-1.1-1.4l-10.2 10.3l1.4 2.2c2.6 4 10.1 10.2 15.6 12.9c12.2 5.9 31.8 4.8 42.8-2.3c6.4-4.2 12-12.3 13.9-19.9c2.1-8.2 1.3-20.6-1.9-27.3c-4.6-10.3-12.2-16.6-34-30.6c-9.6-6.3-12.4-8.6-12.4-10.4c0-2.4 3.3-6 6.6-7.6c4-2 11.5-1.7 16.5.5c2.7 1.1 6.4 4.5 8.1 7.1l1.2 1.8l9.7-10.4l-1-1.4c-3.6-5.2-9.4-9.4-15.7-11.7c-5.1-1.8-16.9-2.2-22.6-.7z"
            />
          </svg>
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/nextJS.svg"
            alt="Next.js Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>
        {/* Doker */}
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/docker.svg"
            alt="Docker Logo"
            width="80"
            height="80"
            class="animate-bounce"
          />
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/cplusplus.svg"
            alt="C++ Logo"
            width="80"
            height="80"
            class="animate-pulse"
          />
        </div>
        {/* git */}
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/git.svg"
            alt="Git Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>
        {/* Kubernetes */}
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/python.svg"
            alt="Redux Logo"
            width="70"
            height="70"
            class="animate-spinSlow"
          />
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            alt="Vercel Logo"
            width="80"
            height="80"
            class="animate-spinSlow"
          />
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/postgresql.svg"
            alt="PostgreSQL Logo"
            width="80"
            height="80"
            class="animate-jello"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/mysql.svg"
            alt="MySQL Logo"
            width="80"
            height="80"
            class="animate-bounce"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/mongoDB.svg"
            alt="MongoDB Logo"
            width="30"
            height="40"
            class="animate-rotateY"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/figma.svg"
            alt="Figma Logo"
            width="40"
            height="40"
            class="animate-wave"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="/skills/aws.svg"
            alt="Kubernetes Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="https://www.svgrepo.com/show/374169/vscode2.svg"
            alt="Vercel Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Xcode.svg/1200px-Xcode.svg.png"
            alt="Vercel Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>

        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="https://cdn.jim-nielsen.com/macos/512/terminal-2021-06-03.png?rf=1024"
            alt="Vercel Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>
        <div class="flex justify-center mt-3 md:mt-9">
          <img
            src="https://img.icons8.com/ios_filled/512/github.png"
            alt="Vercel Logo"
            width="80"
            height="80"
            class="animate-wave"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
