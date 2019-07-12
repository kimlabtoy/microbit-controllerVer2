    const PinA = DigitalPin.P5;
    const PinB = DigitalPin.P11;
    const PinC = DigitalPin.P1;
    const PinD = DigitalPin.P2;






//% weight=0 color=#000000 icon="\uf11a"  block="Kimlabmicrobit"
namespace Kimlabmicrobit {
       let init = false;

	export enum CBTM {
        //% block="1"
        A = <number>PinA,
        //% block="2"
        B = <number>PinB,
        //% block="3"
        C = <number>PinC,
        //% block="4"
        D = <number>PinD,
        
    }
	
	
        export enum pushType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }	
	
	function pin_init(): void {
        pins.setPull(PinA, PinPullMode.PullUp);
        pins.setPull(PinB, PinPullMode.PullUp);
        pins.setPull(PinC, PinPullMode.PullUp);
        pins.setPull(PinD, PinPullMode.PullUp);
       
        init = true;
    }
    pin_init();
	
	
	
	
	
    /**
    * 不回傳值
    */
    //% blockId="LedTest" block="Smile"
    //% blockGap=2 weight=1
    export function LedTest(): void {
        basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
    }
	



    /**
    *右輪停止 
    */
	
	//% blockId="RWHEELS" block="Right_wheel_STOP"
    
    export function RWHEELS(): void {
	pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
        
    }
	
	/**
    * 右輪往前
    */
	
	//% blockId="RWHEELf" block="Right_wheel_FORWARD"
    
    export function RWHEELf(): void {
	pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
        
    }
	
	/**
    * 右輪往後
    */
	
	//% blockId="RWHEELb" block="Right_wheel_BACK"
   
    export function RWHEELb(): void {
	pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
        
    }
	
	
	/**
    * 左輪停止
    */
	
	//% blockId="LWHEELS" block="Left_wheel_STOP"
   
    export function LWHEELS(): void {
	pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
        
    }
	
	/**
    * 左輪往前
    */
	
	//% blockId="LWHEELf" block="Left_wheel_FORWARD"
    
    export function LWHEELf(): void {
	pins.digitalWritePin(DigitalPin.P16, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
        
    }
	
	/**
    * 左輪往後
    */
	
	//% blockId="LWHEELb" block="Left_wheel_BACK"
   
    export function LWHEELb(): void {
	pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
        
    }
	
	
	
	
	
	
	/**
    * 設定按鈕
    */
	
	//% blockId="Button_PullUp" block="Button_Res_Pullup"
    
    export function Button_PullUp(): void {
        pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
	pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
    }
	
	
	
  
     //% blockId=Left_Servo
     //% block="Left_Servo degrees %degree"
     //% degree.min=0 degree.max=180
	 
	export function Left_Servo( degree: number): void {
         pins.servoWritePin(AnalogPin.P19, degree)
        
    }
	
	//% blockId=Right_Servo
     //% block="Right_Servo degrees %degree"
     //% degree.min=0 degree.max=180
	 
	export function Right_Servo( degree: number): void {
         pins.servoWritePin(AnalogPin.P15, degree)
        
    }
	

	
	
    /**
     * Do something when a button is pushed down or released. 
     */
    //% blockId=BUTTON block="Button |%myBtn|   %dir|" blockInlineInputs=true
    //% weight=70
    export function BUTTON(myBtn: CBTM, dir: pushType, handler: Action): void {
        if (!init) {
            pin_init();
        }
        pins.onPulsed(<number>myBtn, <number>dir, handler);
    }

    
}
