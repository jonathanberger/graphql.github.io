import { Metadata } from "next"
import { HostedByGraphQLFoundation } from "@/icons"
import { Sponsors } from "./sponsors"
import { About } from "./about"
import { Pricing } from "./pricing"
import { Venue } from "./venue"
import { Button } from "@/app/conf/_components/button"

export const metadata: Metadata = {
  title: "GraphQLConf 2024 — Sept 10-12",
}

export default function Page() {
  return (
    <>
      <div className="conf-hero">
        <div className="container h-full py-16 md:py-20 flex flex-col justify-center">
          <div className="flex text-xs lg:text-lg uppercase gap-4 lg:gap-8 leading-none mb-12">
            <div>September 10-12</div>
            <div className="w-px bg-current" />
            <div>San Francisco, CA</div>
          </div>
          <div className="flex gap-10 items-center">
            <svg
              className="w-full"
              viewBox="0 0 1239 142"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M66.7621 40.9668C65.0537 37.8231 62.6034 35.4207 59.4113 33.7571C56.2191 32.0959 52.4663 31.2653 48.1505 31.2653C40.6861 31.2653 34.7077 33.7136 30.2131 38.6078C25.7136 43.5068 23.4687 50.0429 23.4687 58.2159C23.4687 66.9323 25.8296 73.7387 30.549 78.6329C35.2708 83.5319 41.7638 85.9778 50.0378 85.9778C55.702 85.9778 60.4914 84.5412 64.4013 81.6655C68.3135 78.7923 71.1674 74.6586 72.9676 69.2671H43.6994V52.2883H93.8725V73.7146C92.1641 79.4659 89.2643 84.8116 85.1732 89.7516C81.0797 94.6941 75.8867 98.6925 69.5943 101.744C63.2994 104.801 56.1949 106.327 48.2859 106.327C38.9317 106.327 30.5925 104.284 23.2657 100.197C15.9366 96.109 10.2265 90.4253 6.13783 83.148C2.04433 75.8707 0 67.5624 0 58.2159C0 48.8743 2.04433 40.5418 6.13783 33.2187C10.2265 25.8979 15.9149 20.1925 23.1981 16.1023C30.4813 12.017 38.7964 9.97192 48.1505 9.97192C59.4789 9.97192 69.0312 12.7124 76.8098 18.1933C84.586 23.6742 89.7355 31.2653 92.2535 40.9668H66.7621Z" />
              <path d="M139.863 33.2187C143.908 30.8381 148.405 29.6477 153.349 29.6477V54.0389H147.011C141.257 54.0389 136.939 55.2752 134.063 57.7452C131.185 60.2176 129.747 64.5516 129.747 70.7496V105.654H106.685V30.4566H129.747V42.9878C132.444 38.8566 135.818 35.5994 139.863 33.2187Z" />
              <path d="M164.209 47.5704C167.128 41.7322 171.108 37.2412 176.144 34.0951C181.18 30.9514 186.798 29.3772 193.003 29.3772C198.308 29.3772 202.962 30.4565 206.963 32.6126C210.963 34.7688 214.044 37.5986 216.201 41.102V30.4565H239.264V105.653H216.201V95.008C213.952 98.5114 210.827 101.341 206.828 103.497C202.826 105.653 198.172 106.733 192.868 106.733C186.752 106.733 181.18 105.137 176.144 101.947C171.108 98.7601 167.128 94.2209 164.209 88.3367C161.285 82.4526 159.825 75.6486 159.825 67.9198C159.825 60.1934 161.285 53.4111 164.209 47.5704ZM211.414 54.4445C208.22 51.1197 204.332 49.4561 199.748 49.4561C195.161 49.4561 191.271 51.098 188.081 54.3769C184.886 57.6558 183.292 62.1709 183.292 67.9198C183.292 73.6711 184.886 78.2297 188.081 81.5979C191.271 84.9685 195.161 86.6514 199.748 86.6514C204.332 86.6514 208.22 84.9902 211.414 81.6655C214.604 78.3431 216.201 73.8063 216.201 68.055C216.201 62.3061 214.604 57.7692 211.414 54.4445Z" />
              <path d="M288.357 32.6126C292.31 30.4565 296.94 29.3772 302.247 29.3772C308.452 29.3772 314.068 30.9514 319.109 34.0951C324.14 37.2412 328.122 41.7322 331.042 47.5704C333.965 53.4111 335.425 60.1934 335.425 67.9198C335.425 75.6486 333.965 82.4526 331.042 88.3367C328.122 94.2209 324.14 98.7601 319.109 101.947C314.068 105.137 308.452 106.733 302.247 106.733C297.032 106.733 292.422 105.653 288.425 103.497C284.421 101.341 281.296 98.5573 279.049 95.1408V141.501H255.986V30.4565H279.049V41.102C281.296 37.5985 284.399 34.7688 288.357 32.6126ZM307.172 54.3769C303.977 51.098 300.043 49.4561 295.37 49.4561C290.783 49.4561 286.893 51.1197 283.703 54.4445C280.511 57.7692 278.916 62.3061 278.916 68.055C278.916 73.8063 280.511 78.3431 283.703 81.6655C286.893 84.9902 290.783 86.6514 295.37 86.6514C299.956 86.6514 303.866 84.9685 307.104 81.5979C310.342 78.2297 311.956 73.6711 311.956 67.9198C311.956 62.1709 310.361 57.6558 307.172 54.3769Z" />
              <path d="M414.593 38.2044C419.808 43.9099 422.415 51.7473 422.415 61.7216V105.653H399.488V64.8194C399.488 59.79 398.183 55.881 395.576 53.0946C392.968 50.3131 389.462 48.9176 385.057 48.9176C380.649 48.9176 377.143 50.3131 374.536 53.0946C371.928 55.881 370.626 59.79 370.626 64.8194V105.653H347.561V5.92749H370.626V40.5634C372.962 37.2411 376.155 34.59 380.202 32.6125C384.247 30.6374 388.785 29.6475 393.824 29.6475C402.455 29.6475 409.379 32.499 414.593 38.2044Z" />
              <path d="M505.904 121.826L493.764 105.518C490.168 106.238 486.662 106.597 483.245 106.597C474.343 106.597 466.182 104.531 458.766 100.397C451.348 96.2659 445.456 90.4928 441.097 83.0803C436.735 75.6678 434.556 67.3354 434.556 58.0831C434.556 48.8307 436.735 40.5176 441.097 33.151C445.456 25.7844 451.348 20.0355 458.766 15.9018C466.182 11.7706 474.343 9.70142 483.245 9.70142C492.147 9.70142 500.305 11.7706 507.724 15.9018C515.142 20.0355 520.985 25.7844 525.258 33.151C529.528 40.5176 531.664 48.8307 531.664 58.0831C531.664 66.1668 530.023 73.5575 526.741 80.2505C523.457 86.9435 518.895 92.492 513.052 96.8936L533.822 121.826H505.904ZM464.969 78.0944C469.507 83.0803 475.602 85.5745 483.245 85.5745C490.797 85.5745 496.843 83.0586 501.385 78.0268C505.924 72.9974 508.195 66.3479 508.195 58.0831C508.195 49.7265 505.924 43.0552 501.385 38.0693C496.843 33.0834 490.797 30.5892 483.245 30.5892C475.602 30.5892 469.507 33.0616 464.969 38.0017C460.429 42.9442 458.157 49.6371 458.157 58.0831C458.157 66.4372 460.429 73.1085 464.969 78.0944Z" />
              <path d="M567.809 87.866H598.02V105.654H544.744V11.0488H567.809V87.866Z" />
              <path d="M611.238 33.2187C615.283 25.8979 620.926 20.1925 628.163 16.1023C635.4 12.017 643.607 9.97192 652.777 9.97192C664.016 9.97192 673.636 12.9369 681.642 18.8669C689.643 24.7945 694.993 32.8806 697.69 43.1229H672.334C670.446 39.1704 667.769 36.1619 664.308 34.0951C660.848 32.0283 656.912 30.9949 652.509 30.9949C645.404 30.9949 639.648 33.4674 635.243 38.4074C630.838 43.3475 628.637 49.9511 628.637 58.2159C628.637 66.4832 630.838 73.0868 635.243 78.0269C639.648 82.9693 645.404 85.4394 652.509 85.4394C656.912 85.4394 660.848 84.4084 664.308 82.3391C667.769 80.2748 670.446 77.2639 672.334 73.3114H697.69C694.993 83.5512 689.643 91.618 681.642 97.4998C673.636 103.386 664.016 106.327 652.777 106.327C643.607 106.327 635.4 104.284 628.163 100.197C620.926 96.109 615.283 90.4253 611.238 83.148C607.19 75.8707 605.168 67.5624 605.168 58.2159C605.168 48.8743 607.19 40.5418 611.238 33.2187Z" />
              <path d="M726.216 102.015C720.325 98.8712 715.695 94.3802 712.324 88.5396C708.95 82.6989 707.266 75.8707 707.266 68.055C707.266 60.3286 708.972 53.5221 712.391 47.638C715.806 41.7539 720.484 37.2412 726.417 34.0951C732.351 30.9514 739.004 29.3772 746.379 29.3772C753.752 29.3772 760.407 30.9514 766.339 34.0951C772.274 37.2412 776.95 41.7539 780.367 47.638C783.784 53.5221 785.492 60.3286 785.492 68.055C785.492 75.7814 783.759 82.5878 780.299 88.472C776.836 94.3561 772.117 98.8712 766.139 102.015C760.158 105.161 753.481 106.733 746.108 106.733C738.736 106.733 732.103 105.161 726.216 102.015ZM757.372 81.9359C760.474 78.7005 762.023 74.0743 762.023 68.055C762.023 62.0356 760.518 57.4071 757.507 54.1741C754.494 50.9386 750.784 49.3233 746.379 49.3233C741.882 49.3233 738.151 50.9193 735.184 54.1065C732.216 57.296 730.732 61.9463 730.732 68.055C730.732 74.0743 732.194 78.7005 735.116 81.9359C738.037 85.1689 741.703 86.7866 746.108 86.7866C750.514 86.7866 754.269 85.1689 757.372 81.9359Z" />
              <path d="M864.73 38.2047C869.991 43.9101 872.62 51.7476 872.62 61.7219V105.654H849.693V64.8196C849.693 59.7903 848.388 55.8812 845.78 53.0949C843.173 50.3134 839.667 48.9178 835.261 48.9178C830.854 48.9178 827.348 50.3134 824.74 53.0949C822.133 55.8812 820.83 59.7903 820.83 64.8196V105.654H797.765V30.4566H820.83V40.4284C823.167 37.1061 826.313 34.4767 830.271 32.5451C834.227 30.6135 838.678 29.6477 843.622 29.6477C852.435 29.6477 859.472 32.4992 864.73 38.2047Z" />
              <path d="M926.432 49.5913H914.026V105.653H890.961V49.5913H882.6V30.4564H890.961V28.3003C890.961 19.0479 893.612 12.0169 898.918 7.20968C904.223 2.40484 912.001 0 922.252 0C923.96 0 925.219 0.0458755 926.029 0.132797V19.6733C921.621 19.4053 918.521 20.0355 916.723 21.5614C914.923 23.0898 914.026 25.8303 914.026 29.7828V30.4564H926.432V49.5913Z" />
              <path d="M974.809 100.271C996.382 82.8988 1016.82 66.5495 1016.82 49.7461C1016.82 40.6634 1012.85 33.8508 1001.72 33.8508C991.046 33.8508 985.595 41.2297 985.141 51.5622H975.151C975.832 34.0778 986.845 24.9951 1001.61 24.9951C1017.05 24.9951 1027.04 34.0778 1027.04 49.2921C1027.04 69.73 1005.01 87.1021 990.365 99.0236H1029.42V107.652H974.809V100.271Z" />
              <path d="M1069.95 25.2222C1092.55 25.2222 1098.45 43.1605 1098.45 66.6642C1098.45 90.5072 1092.55 108.56 1069.95 108.56C1047.24 108.56 1041.34 90.5072 1041.34 66.6642C1041.34 43.1605 1047.24 25.2222 1069.95 25.2222ZM1069.95 34.6441C1053.71 34.6441 1051.56 49.6314 1051.56 66.6642C1051.56 84.3756 1053.71 99.1359 1069.95 99.1359C1086.07 99.1359 1088.23 84.3756 1088.23 66.6642C1088.23 49.6314 1086.07 34.6441 1069.95 34.6441Z" />
              <path d="M1111.39 100.271C1132.96 82.8988 1153.4 66.5495 1153.4 49.7461C1153.4 40.6634 1149.42 33.8508 1138.3 33.8508C1127.62 33.8508 1122.17 41.2297 1121.72 51.5622H1111.73C1112.41 34.0778 1123.42 24.9951 1138.18 24.9951C1153.62 24.9951 1163.61 34.0778 1163.61 49.2921C1163.61 69.73 1141.59 87.1021 1126.94 99.0236H1166V107.652H1111.39V100.271Z" />
              <path d="M1217.43 90.2801H1175.42V82.4447L1215.27 27.2651H1227.65V81.3097H1239V90.2801H1227.65V108.56H1217.43V90.2801ZM1217.88 81.3097V38.0516L1187.34 81.3097H1217.88Z" />
            </svg>
          </div>
          <HostedByGraphQLFoundation className="shrink-0 h-8 lg:h-10 mt-5 mb-16 lg:mb-32 self-start" />
          <div className="flex items-center gap-12 max-md:flex-col">
            <Button href="https://cvent.me/gk2dRw">Register Now!</Button>
            <a
              href="/conf/2024/speak"
              className="whitespace-nowrap with-arrow w-40 hover:text-primary transition-colors"
            >
              Submit to Speak
            </a>
            <a
              href="/conf/2024/sponsor"
              className="whitespace-nowrap with-arrow w-40 hover:text-primary transition-colors"
            >
              Join as a Sponsor
            </a>
            <a
              href="/conf/2024/partner"
              className="whitespace-nowrap with-arrow w-40 hover:text-primary transition-colors"
            >
              Join as a Partner
            </a>
          </div>
        </div>
      </div>
      <Pricing />
      <About />
      <Venue />
      <Sponsors />
    </>
  )
}