import { Html } from "@react-three/drei";

export interface OverlayProps extends React.ComponentProps<typeof Html> {
    rotation?: [number, number, number];
    position?: [number, number, number];
    onClick?: () => void;
}
