import { createElement } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

const BreadcrumbNav = _a => {
    var { children } = _a,
        restProps = __rest(_a, ["children"]);
    return createElement("nav", Object.assign({ className: "react-aria-breadcrumbs", "aria-label": "breadcrumbs", role: "navigation" }, restProps), createElement("ol", null, children));
};
const Breadcrumb = _a => {
    var { children, path, title, text, current } = _a,
        restProps = __rest(_a, ["children", "path", "title", "text", "current"]);
    return createElement("li", Object.assign({}, restProps), createElement("a", { href: current ? "#current" : path, title: current ? `current page` : title, "aria-current": current ? "page" : null }, children ? children : text));
};

export { Breadcrumb, BreadcrumbNav };
