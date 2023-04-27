import {
  ArrowLeftIcon,
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function IssueDetail() {
  return (
    <div className=" tw-mt-7 ">
      <div className=" tw-container tw-flex tw-items-center tw-justify-between">
        <div className=" tw-flex tw-items-center tw-space-x-3">
          <Link className=" tw-flex tw-items-center tw-text-blue-500 tw-space-x-2">
            <ArrowLeftIcon className=" tw-h-5 tw-w-5" />
            <p>Project A</p>
          </Link>
          <span>/</span>
          <p className=" tw-font-medium">Website not responsive</p>
          <p className=" tw-text-accent-gray"># 32</p>
        </div>
        <div className=" tw-flex tw-items-center tw-space-x-5">
          <button className=" tw-bg-accent-smoke tw-py-0.5 tw-px-3 tw-rounded-lg">
            <EllipsisHorizontalIcon className=" tw-h-5 tw-w-5" />
          </button>
          <button className=" tw-flex tw-space-x-1 tw-items-center tw-border tw-border-accent-gray tw-text-accent-gray tw-py-0.5 tw-px-1.5 tw-rounded-lg">
            <LockClosedIcon className=" tw-h-5 tw-w-5 " />
            <p>Close issue</p>
          </button>
        </div>
      </div>
      <div className=" tw-bg-accent-primary tw-w-full tw-h-0.5 tw-mt-4"></div>
      <div className="tw-flex tw-container tw-divide-x tw-min-h-max">
        {/* left panel start  */}
        <div className=" tw-flex-1 tw-pt-5 tw-pr-8">
          <div className=" tw-flex tw-space-x-3 tw-items-start">
            <div className=" tw-h-8 tw-w-8 tw-bg-black tw-rounded-full"></div>
            <div className=" tw-space-y-0.5">
              <p className=" tw-font-medium">Esther Passaris</p>
              <p className=" tw-text-xs">
                Published on 14th Feb 2023 at 9.30pm
              </p>
            </div>
          </div>
          {/* issue description  */}
          <div className=" tw-w-full tw-bg-accent-smoke tw-rounded-lg tw-mt-3 tw-py-3 tw-px-11 tw-space-y-3">
            <h3 className=" tw-font-medium">Issue description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vehicula ipsum ut malesuada semper. Praesent auctor nunc rutrum
              turpis tempus, eget iaculis urna facilisis. Etiam gravida eleifend
              urna. Suspendisse tortor nunc, dapibus id commodo eu, ornare a ex.
              Maecenas tellus dui, consectetur vel porta at, ultricies non
              felis. Fusce sit amet felis faucibus, feugiat turpis ut, elementum
              quam.{" "}
            </p>
            <h3 className=" tw-font-medium">Steps to recreate</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vehicula ipsum ut malesuada semper. Praesent auctor nunc rutrum
              turpis tempus, eget iaculis urna facilisis. Etiam gravida eleifend
              urna.{" "}
            </p>
          </div>
          {/* comments  */}
          <div className=" tw-mt-8">
            <div className=" tw-space-y-2">
            <div className=" tw-flex tw-space-x-3 tw-items-start">
                <div className=" tw-relative tw-w-fit">
                    <ChatBubbleLeftEllipsisIcon className=" tw-h-4 tw-w-4 tw-absolute tw-z-10 tw-rounded-sm tw-bg-white tw-top-3/4 tw-right-0" />
                <div className=" tw-h-8 tw-w-8 tw-bg-black tw-rounded-full"></div>
              </div>
              <div className=" tw-space-y-0.5">
                <p className=" tw-font-medium">Esther Passaris</p>
                <p className=" tw-text-xs">
                  Commented on 14th Feb 2023 at 9.30pm
                </p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vehicula ipsum ut malesuada semper. Praesent auctor nunc rutrum
              turpis tempus, eget iaculis urna facilisis. Etiam gravida eleifend
              urna.{" "}
            </p>
            </div>
          </div>
        </div>
        {/* right panel start */}
        <div className=" tw-px-2 tw-pt-5 tw-space-y-4 tw-divide-y">
          <div className=" tw-space-y-1">
            <div className=" tw-flex tw-items-start tw-space-x-3 tw-text-accent-green">
              <LockOpenIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium">Open Issue</p>
            </div>
            <div className=" tw-flex tw-items-start tw-space-x-3 tw-text-accent-gray">
              <ChatBubbleLeftEllipsisIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium">2 comments</p>
            </div>
            <div className=" tw-flex tw-items-start tw-space-x-3">
              <ChartBarIcon className=" tw-h-5 tw-w-5" />
              <p className=" tw-font-medium">High priority</p>
            </div>
          </div>
          <div className=" tw-py-3 tw-space-y-2.5">
            <h4 className=" tw-font-medium tw-uppercase tw-text-accent-gray">
              Details
            </h4>
            <div className=" tw-flex tw-items-center tw-space-x-2">
              <p className=" tw-text-accent-gray">Identified by:</p>
              <div className=" tw-flex tw-items-center tw-space-x-2">
                <div className=" tw-h-5 tw-w-5 tw-bg-black tw-rounded-full"></div>
                <p>Esther Passaris</p>
              </div>
            </div>
            <div className=" tw-flex tw-items-center tw-space-x-2">
              <p className=" tw-text-accent-gray"> Assigned to:</p>
              <div className=" tw-flex tw-items-center tw-space-x-2">
                <div className=" tw-h-5 tw-w-5 tw-bg-black tw-rounded-full"></div>
                <p>Esther Passaris</p>
              </div>
            </div>
            <div className=" tw-space-y-1">
              <p className=" tw-text-accent-gray">Summary</p>
              <p className=" tw-max-w-xs">
                Praesent auctor nunc rutrum turpis tempus, eget iaculis urna
                facilisis. Etiam gravida eleifend urna.
              </p>
            </div>
          </div>
          <div className=" tw-py-3 tw-space-y-2.5">
            <h4 className=" tw-font-medium tw-uppercase tw-text-accent-gray">
              Resolution
            </h4>
            <div className=" tw-space-y-1">
              <p className=" tw-text-accent-gray">Summary</p>
              <p className=" tw-max-w-xs">
                Praesent auctor nunc rutrum turpis tempus, eget iaculis urna
                facilisis. Etiam gravida eleifend urna.
              </p>
            </div>
            <div className=" tw-flex tw-items-center tw-space-x-2">
              <p className=" tw-text-accent-gray">Date:</p>
              <p>01/12/2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;
