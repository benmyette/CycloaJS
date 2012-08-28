%# -*- encoding: utf-8 -*-

/** @type {number} */
this.A = 0;
/** @type {number} */
this.X = 0;
/** @type {number} */
this.Y = 0;
/** @type {number} */
this.PC = 0;
/** @type {number} */
this.SP = 0;
/** @type {number} */
this.P = 0;
/** @type {boolean} */
this.NMI = false;
/** @type {boolean} */
this.IRQ = false;
/**
 * @const
 * @type {Uint8Array}
 */
this.ram = new Uint8Array(new ArrayBuffer(0x800));
this.rom = new Array(32);

this.ZNFlagCache = cycloa.VirtualMachine.ZNFlagCache;
this.TransTable = cycloa.VirtualMachine.TransTable;
this.MAX_INST_LENGTH = 3;

