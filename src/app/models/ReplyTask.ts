
import { Task} from "./Task"
import { Document } from "./Document";
import { User } from "./User";
export class ReplyTask {

  idTaskrep!: number;
  taskState!: String;
  mark!: number;
  task!: Task[];
  student!: User[];
  documents!: Document[];
  editMode?: boolean;
  tempMark?: number;
}