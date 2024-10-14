namespace sample.db;

using { cuid } from '@sap/cds/common';


entity Test : cuid {
name : String(100);
}