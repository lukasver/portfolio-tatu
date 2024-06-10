import { Linkedin, Menu, type LucideIcon } from 'lucide-react';

export type Icon = React.ComponentProps<LucideIcon>;

export const Icons = {
  Twitter: (props?: Icon) => (
    <svg
      xmlns='http://www.w3.org/1999/xlink'
      viewBox='0 0 507.91 446.91'
      role='none'
      width={'100%'}
      height={'100%'}
      strokeLinecap='round'
      strokeLinejoin='round'
      fill={'black'}
      {...props}
    >
      <title>X</title>
      <path
        xmlns='http://www.w3.org/2000/svg'
        d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z'
      />
    </svg>
  ),
  Github: (props?: Icon) => (
    <svg
      viewBox='0 0 32 32'
      aria-hidden='true'
      width='32px'
      height='32px'
      {...props}
    >
      <path
        fill='currentColor'
        d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'
      ></path>
    </svg>
  ),
  Linkedin: Linkedin,
  Medium: (props?: Icon) => (
    <svg
      width='32px'
      height='32px'
      viewBox='0 0 256 146'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      preserveAspectRatio='xMidYMid'
      {...props}
    >
      <g>
        <path
          d='M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z'
          fill='#000000'
        ></path>
      </g>
    </svg>
  ),
  Menu: Menu,

  // sun: SunMedium,
  // moon: Moon,
  // loxgo: (props: LucideProps) => (
  //   <Image
  //     src={getAssets("v2/v2-isologo.webp")}
  //     //@ts-expect-error SafeNumber wierd error
  //     width={100}
  //     //@ts-expect-error SafeNumber wierd error
  //     height={100}
  //     alt="Logo"
  //     {...props}
  //   />
  // ),
  // MoreHorizontal: MoreHorizontal,
  // downloadCloud: DownloadCloud,
  // cancelCircle: XCircle,
  // checkCircle: CheckCircle,
  // logIn: LogIn,
  // logOut: LogOut,
  // chevronDown: ChevronDown,
} as const;
